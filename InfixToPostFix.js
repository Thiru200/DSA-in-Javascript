class Conversion{
    constructor(cap) {
        this.top = -1;
        this.capacity = cap;
        this.array = [];
        this.output = [];
        this.precedence = new Map();
        this.precedence.set('+', 1);
        this.precedence.set('-', 1);
        this.precedence.set('*', 2);
        this.precedence.set('/', 2);
        this.precedence.set('^', 3);
    }
    isEmpty() {
        return this.top === -1;
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    pop() {
        if (!this.isEmpty()) {
            this.top -= 1;
            return this.array.pop();
        }
    }
    push(op) {
        this.top+=1;
        this.array.push(op);
    }
    isOperand(ch) {
        return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= 0 && ch <= 9);
    }
    notGreater(i) {
        try {
            let a = this.precedence.get(i);
            let b = this.precedence.get(this.peek());
            console.log(`A is ${a},B is ${b}`);
            return a <= b;
        }
        catch (err) {
            return false;
        }
    }
    infixToPostfix(exp) {
        for (let index of exp) {
            if (this.isOperand(index)) {
                this.output.push(index);
                console.log("After",this.output);
            }
            else if (index == '(') {
                this.push(index);
                console.log("Special Symbol",this.array);
            }
            else if (index == ')') {
                while ((!this.isEmpty()) && this.peek() !== '(') {
                    let a = this.pop();
                    this.output.push(a);
                     console.log("Inserting",this.output);
                }
                if (this.isEmpty() && this.peek() !== '(') {
                    return -1;
                }
                else {
                    this.pop();
                    console.log("popped", this.array);
                }
            }
            else {
                while (!this.isEmpty() && this.notGreater(index)) {
                    console.log("Before",this.output);
                    this.output.push(this.pop());
                }
                this.push(index);
                console.log("After",this.array);
            }
        }
        while (!this.isEmpty()) {
            this.output.push(this.pop());
             console.log("Inserting",this.output);
        }
        let string = "";
        for (let ch of this.output) {
            string += ch;
        }
        return string;
    }
}
let exp = "A*(B+C)/D";
let myExpression = new Conversion(exp.length);
let result = myExpression.infixToPostfix(exp);
console.log(result);
class TwoStackArray {
    constructor(n) {
        this.cap = n;
        this.arr = [];
        this.top1 = Math.floor(n / 2) + 1;
        this.top2 = Math.floor(n / 2);
    }
    push1(data) {
        if (this.top1 > 0) {
            this.top1 = this.top1 - 1;
            this.arr[this.top1] = data;
        }
        else {
            console.log("Stack is overflow");
        } 
    }
    push2(data) {
        if (this.top2 < (this.cap - 1)) {
            this.top2++;
            this.arr[this.top2] = data;
        }
        else {
            console.log("Stack is overflow");
        }
    }
    pop1() {
        if (this.top1 <= (this.cap) / 2) {
            let x = this.arr[this.top1];
            this.top1 = this.top1 + 1;
            return x;
        }
        else {
            console.log("Stack is underflow");
        }
    }
    pop2() {
        if (this.top2 > (this.cap)/2 ) {
            let x = this.arr[this.top2];
            this.top2 = this.top2 - 1;
            return x;
        }
        else {
            console.log("Stack is underflow");
        }
    }
}
let myStack = new TwoStackArray(5);
myStack.push1(10);
myStack.push1(20);
myStack.push1(30);
myStack.push2(40);
myStack.push2(50);
console.log(myStack.pop1(),myStack);
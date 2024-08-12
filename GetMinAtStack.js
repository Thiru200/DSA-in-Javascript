class MinStack{
    constructor() {
        this.top == -1;
        this.arr = [];
    }
    push(element) {
        let currMin = this.arr.length == 0 ? element : Math.min(element, this.arr[this.arr.length - 1][1]);
        this.arr.push([element, currMin]);
    }
    pop() {
        let data = "";
        for (let i = this.arr.length - 1; i >= 0; i--){
            let result = this.arr[i];        
            data += `${result[1]} `;
        }
        console.log(data);
    }
}
let myMinStack = new MinStack();
myMinStack.push(1);
myMinStack.push(2);
myMinStack.push(3);
myMinStack.push(4);
myMinStack.push(5);
myMinStack.pop();
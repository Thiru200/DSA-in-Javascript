class KStack{
    constructor(k, n) {
        this.cap = n;
        this.k = k;
        this.arr = [];
        this.top = new Array(k).fill(-1);
        this.next = new Array(n);
        this.freeTop = 0;
        for (let i = 0; i < n - 1; i++){
            this.next[i] = i + 1;
        }
        this.next[n - 1] = -1;
    }
    push(stack, data) {
        if (this.isFull()) {
        console.log("Stack overflow");
           return this.arr[this.top[stack]];
        }
        let i = this.freeTop;//0//1
        this.freeTop = this.next[i];//1//2//3//4//5
        this.arr[i] = data;//10//20
        this.next[i] = this.top[stack];//-1->0//0->1//1->2//2->3//3->4
        this.top[stack] = i;//0//1//2//3//4
        return this.arr[i];
    }
    pop(stack) {
        if (this.isEmpty()) {
           console.log("Stack underflow");
           return this.arr[this.top[stack]];
        }
        let i = this.top[stack];//4
        this.top[stack] = this.next[i];//3
        this.next[i] = this.freeTop;//-1
        this.freeTop = i;
        return this.arr[i];

    }
    isEmpty(stack) {
        return (this.top[stack] == -1);
    }
    isFull() {
        return this.freeTop == -1 ? true : false;
    }
}

let head = new KStack(2, 5);
console.log(head.push(0, 10), head);
console.log(head.push(0, 20), head);
console.log(head.push(0, 30), head);
console.log(head.push(0, 40), head);
console.log(head.push(0, 50), head);
console.log(head.pop(0), head);
console.log(head.push(1, 60), head);
//console.log(head.pop(1), head);
//console.log(head.push(1, 70), head);
//console.log(head.push(2, 80), head);
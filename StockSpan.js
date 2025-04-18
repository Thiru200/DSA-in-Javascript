class StockSpan{
    constructor(n) {
        this.cap = n;
        this.arr = [];
        this.top = -1;
    }
    push(data) {
        if (this.top == this.cap - 1) {
            console.log("Stack is overflow");
            return;
        }
        else {
            this.top++;
            this.arr[this.top] = data;
        }
    }
    pop() {
        if (this.top == -1) {
            console.log("Stack is underflow");
            return;
        }
        else {
            this.top = this.top - 1;
        }
    }
    peek() {
        if (this.top == -1) {
            console.log("Stack is underflow");
            return;
        }
        else {
            return this.arr[this.top];
        }
    }
    isEmpty() {
        return (this.top == -1);
    }
}
let SourceData = [18, 12, 13, 14, 11, 16];
function CheckStockSpan() {
    let st = new StockSpan(SourceData.length);
    st.push(0);
    console.log(1);
    for (let i = 1; i < SourceData.length; i++){
        while (st.isEmpty() == false && SourceData[st.peek()] <= SourceData[i]) {
            st.pop();
        }
        let span = st.isEmpty() ? i + 1 : (i - st.peek());
        console.log(span);
        st.push(i);
    }
}
CheckStockSpan();
//console.log(MySpanStock);


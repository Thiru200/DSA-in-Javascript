class Stack{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(data) {      
        let myNode = new Node(data);
        myNode.next = this.head;
        this.head = myNode;
        this.size++;
        return this.head;
    }
    pop() {
        if (this.head == null) {
            return 0;
        }
        let res = this.head.data;
        this.head = this.head.next;
        this.size--;
        return res;
    }
    GetSize() {
        return this.size;
    }
    peek() {
        if (this.head == null) {
            return 0;
        }
        return this.head.data;
    }
}
function fnBalancedParanthesis(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        console.log(char,i,str.length);
        if (char == "(" || char == "[" || char == "{") {
            strArr.push(char);
        }
        else {
            
            if (strArr.length == 0) {
                return false;
            }
            if (!fnMatchingPattern(strArr[strArr.length-1], char)) {
                return false;
            }
            else {
                strArr.pop();
            }
        }
    }
    return (strArr.length == 0);
}
function fnMatchingPattern(a, b) {
    //console.log(a, b);
    return (a == "(" && b == ")") || (a == "[" && b == "]") || (a == "{" && b == "}");
}
function DeleteMiddleElement(arr,size) {
        let middleElement = Math.floor((size+1)/2);
    let ElementIndex = arr.indexOf(middleElement);
    console.log(ElementIndex,middleElement);
        let myARR=[];
        if (ElementIndex != -1) {
            console.log(ElementIndex);
                myARR=arr.slice(0,ElementIndex);
                arr.slice(ElementIndex+1).forEach((value)=>{
                    myARR.push(value);
                });
        }
        return myARR;
}


let st = new Stack();
st.push(10);
st.push(20);
st.push(30);

console.log(DeleteMiddleElement([12, 6, 8, 9, 9, 5, 11, 5 ,5, 9 ,6 ,11],12));
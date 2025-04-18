function fnSwapPairWiseData(head) {
    let curr = head;
    let count = 0;
    let prev = null,next=null;
    while (curr != null && count<2) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if (next != null) {
        let rem_node = fnSwapPairWiseData(next);
        prev.next.next = rem_node;
        head = rem_node;
    }  
    return prev;
}

let myTemp01 = new Node(1);
let myTemp02 = new Node(2);
let myTemp03 = new Node(3);
let myTemp04 = new Node(4);

myTemp01.next = myTemp02;
myTemp02.next = myTemp03;
myTemp03.next = myTemp04;
myTemp04.next = null;

console.log(fnSwapPairWiseData(myTemp01));

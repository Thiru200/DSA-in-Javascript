// function fnCreateDoublyLinkedList(arr) {
//     let prev = null;
//     let head = null;
//     arr.forEach((val, i) => {
//         let myNode = new DoubleNode(val);
//         let first = myNode;
//         console.log(myNode);
//         if (i == 0) {
//             myNode.prev = null;
//             myNode.next = arr[i + 1] == null ? null : new DoubleNode(arr[i + 1]);
//         }
//         else {
//             myNode.prev = prev;
//             myNode.next = arr[i + 1] == null ? null : new DoubleNode(arr[i + 1]);
//             head.next = myNode;
//         }
//         head = first;
//     });
//     //return ReverseDoublyLinkedList(prev);
//     return head;
// }
function ReverseDoublyLinkedList(head) {
    let curr = head;
    let prev = null;
    if (head == null) {
        return head;
    }
    while (curr != null) {
        prev = curr;
        [curr.prev, curr.next] = [curr.next, curr.prev];
        curr = curr.prev;
    }
    return prev;
}
function fnInsertInBegin(Element, head) {
    let MyNewNode = new DoublyNode(Element);
    let curr = head;
    if (head == null) {
        return MyNewNode;
    }
    MyNewNode.next = curr;
    curr.prev = MyNewNode;
    return MyNewNode;
}
function fnInsertInEnd(Element, head) {
    let MyNewNode = new DoublyNode(Element);
    let curr = head;
    while (curr.next != null) {
        curr = curr.next;
    }
    MyNewNode.prev = curr;
    curr.next = MyNewNode;  
    
    return head;
}
function fnDeleteNodeAtBegin(head) {
    if (head == null || head.next == null) {
        return null;
    }
    let curr = head;
    let next = curr.next;
    curr.prev = null;
    curr = next;
    return head;
}
class DoublyNode{
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
let DHead01 = new DoublyNode(1);
DHead01.prev = null;
let DHead02 = new DoublyNode(2);
DHead02.prev = DHead01;
DHead01.next = DHead02;
let DHead03 = new DoublyNode(3);
DHead02.next = DHead03;
DHead03.prev = DHead02;
DHead03.next = null;
console.log(DHead01);
console.log("Inserting Element At End", fnInsertInBegin(4, DHead01));
console.log("Inserting Element At End", fnInsertInEnd(5, DHead01));
console.log("Deleting Element At Start", fnDeleteNodeAtBegin(DHead01));

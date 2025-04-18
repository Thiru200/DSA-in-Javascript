function fnMergeLinkedList(head1,head2) {
    let arr1 = [];
    for (let curr = head1; curr != null; curr = curr.next) {
        arr1.push(curr.data);
    }
    for (let curr = head2; curr != null; curr = curr.next) {
        arr1.push(curr.data);
    }    
    arr1 = arr1.sort(function (a, b) { return a - b; });
    let curr = null;
    let head = null;
    for (let i = 0; i < arr1.length; i++) {
        let myNode = new Node(arr1[i]);
        if (arr1[i + 1] == null) {
            myNode.next = null;
        }
        else {
            myNode.next = new Node(arr1[i + 1]);
        }
        if (curr == null) {
            curr = myNode;
            head = curr;       
        }
        else {
            curr.next = myNode;
            curr = myNode;
        }
    }
    return head;
}
let head01 = new Node(5);
let head02 = new Node(10);
let head03 = new Node(15);
let head04 = new Node(40);
head01.next = head02;
head02.next = head03;
head03.next = head04;
head04.next = null;


let head21 = new Node(25);
let head22 = new Node(20);
let head23 = new Node(35);
let head24 = new Node(45);
head21.next = head22;
head22.next = head23;
head23.next = head24;
head24.next = null;

console.log(fnMergeLinkedList(head01, head21));
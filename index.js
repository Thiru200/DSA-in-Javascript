class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class DoublyNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
let head01 = new Node(10);
let head02 = new Node(20);
head01.next = head02;
let head03 = new Node(30);
head02.next = head03;
head03.next = head01;

let Dhead01 = new Node(10);
let Dhead02 = new Node(20);
Dhead01.next = Dhead02;
Dhead02.prev = Dhead01;
let Dhead03 = new Node(30);
Dhead03.prev = Dhead02;
Dhead02.next = Dhead03;
Dhead03.next = Dhead01;
Dhead01.prev = Dhead03;

fnDisplayData(head01);
head01 = fnInsertAtBegin(head01, 5);
head01 = fnInsertAtEnd(head01, 40);
head01 = fnDeleteKthNode(head01, 4);
Dhead01 = fnInsertAtBeginCLL(Dhead01, 5);
console.log(Dhead01);
function fnDisplayData(head) {
  let curr = head;
  if (head == null) {
    console.log(head.data);
  }
  do {
    console.log(curr.data);
    curr = curr.next;
  } while (curr != head);
}
function fnInsertAtBegin(head, x) {
  let myNode = new Node(x);
  if (head == null) {
    myNode.next = myNode;
    return myNode;
  }
  myNode.next = head.next;
  head.next = myNode;
  [head.data, myNode.data] = [myNode.data, head.data];
  return head;
}
function fnInsertAtEnd(head, x) {
  let myNode = new Node(x);
  if (head == null) {
    myNode.next = myNode;
    return myNode;
  }
  myNode.next = head.next;
  head.next = myNode;
  [myNode.data, head.data] = [head.data, myNode.data];
  return myNode;
}
function fnDeleteKthNode(head, k) {
  let length = 0;
  if (head == null) {
    return null;
  }
  for (let curr = head.next; curr != head; curr = curr.next) {
    length = length + 1;
  }
  if (k == 1) {
    return fnDeleteFirstNode(head);
  }
  if (length < k) {
    return head;
  }
  curr = head;
  for (let i = 0; i < k - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}
function fnDeleteFirstNode(head) {
  let curr = head;
  curr = curr.next;
  return curr;
}
function fnInsertAtBeginCLL(head, x) {
  let myNode = new DoublyNode(5);
  if (head == null) {
    myNode.prev = myNode;
    myNode.next = myNode;
    return myNode;
  }
  let curr = head;
  myNode.next = curr;
  myNode.prev = curr.prev;
  curr.prev.next = myNode;
  curr.prev = myNode;
  return myNode;
}

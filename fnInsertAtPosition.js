function fnInsertAtPosition(head, pos, data) {
  let length = 1;
  let curr = head;
  let myNode = new Node(data);
  while (curr.next != head) {
    length = length + 1;
    curr = curr.next;
  }
  if (head == null) {
    return head;
  }
  if (length < pos) {
    return head;
  }
  curr = head;
  for (let i = 0; i < pos - 1; i++) {
    curr = curr.next;
  }
  let next = curr.next;
  curr.next = myNode;
  myNode.next = next;
  return head;
}

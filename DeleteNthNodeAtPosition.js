function deleteAtPosition(head, pos) {
  if (pos == 1) {
    return deleteFirstNode(head);
  }
  let curr = head;
  for (let i = 0; i < pos - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}
function deleteFirstNode(head) {
  let curr = head;
  while (curr.next != head) {
    curr = curr.next;
  }
  let temp = head;
  head = head.next;
  curr.next = head;
  temp.next = null;
  return head;
}

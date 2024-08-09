function fnDeleteTailNode(head) {
  let temp = head;
  let prev = head;
  while (temp.next != head) {
    prev = temp;
    temp = temp.next;
  }
  prev.next = head;
  temp.next = null;
  return head;
}

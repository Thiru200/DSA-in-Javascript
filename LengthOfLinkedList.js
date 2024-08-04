function fnLengthOfCLL(head) {
  let length = 1;
  if (head == null) {
    return 0;
  }
  let curr = head.next;
  while (curr != head) {
    length = length + 1;
    curr = curr.next;
  }
  return length;
}

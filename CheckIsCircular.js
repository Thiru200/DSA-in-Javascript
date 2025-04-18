function fnCheckIsCircular(head) {
  if (head == null) {
    return 1;
  }
  if (head.next == null) {
    return 0;
  }
  let curr = head.next;
  while (curr != head && curr != null) {
    curr = curr.next;
  }
  return curr == null ? 0 : 1;
}

function intersectPoint(head1,head2)
{
    let mySet = new Set();
    let curr = head1;
    while (curr != null) {
        mySet.add(curr);
        curr = curr.next;
    }
    curr = head2;
    while (curr != null) {
        if (mySet.has(curr)) {
            return curr.data;
        }
        curr = curr.next;
    }
    return -1;
}

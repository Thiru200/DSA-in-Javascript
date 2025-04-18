function fnJoinTheList(head1, head2) {
    let curr=head1;
    while (curr != null && curr.next != null)
    {
        curr=curr.next;
    }
    curr.next=head2;
    return head1;
}
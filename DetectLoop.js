function fnDetectLoop(head) {
    let curr = head;
    if (head == null || head.next == null) {
         return false;
    }
    let temp = new Node(0);
    while (curr != null) {
        if (curr.next == null) {
            return false;
        }
        if (curr.next.data == temp.data) {
            return true;
        }     
        let curr_next = curr.next;
        curr.next = temp;
        curr = curr_next;
    }
}
function fnDetectLoopUsingFloydCycle(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next; 
        console.log(slow, fast);
        if (slow == fast) {
            return true;
        }
    }
    return false;
}

console.log(fnDetectLoopUsingFloydCycle(temp1));
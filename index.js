class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let temp1 = new Node(1);
let temp2 = new Node(2);
let temp3 = new Node(3);
let temp4 = new Node(4);

temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp2;
console.log(temp1);
//console.log(BreakLoopOfList(temp1));
//console.log("Deleted Node", fnDeleteInnerElementOfList(temp3));
//console.log(SegregateOddOrEven(temp1));
console.log(PairSwapNodes(temp1),true);
function IsLoopOccured(head) {
    let newSet = new Map();
    if (head == null || head.next==null) {
        return false;
    }
    let curr = head;
    while (curr != null) {
        if (newSet.has(curr.data)) {
            return true;
        }
        else {
            newSet.set(curr.data, curr.data);
        }
        curr = curr.next;
    }
    
    return false;
}
function IsUnderLoop(head) {
    
    let curr = head;
    if (curr == null || curr.next == null) {
        
        return false;
    }
    let slow = head; fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow.data == fast.data) {
            return true;
        }
    }
    return false;
}
function BreakLoopOfList(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break;
        }
    } 
    if (slow != fast) {
        return head;
    }
    while (slow.next != fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = null;
    return head;
}
function fnDeleteInnerElementOfList(DeleteNode) {
    let curr = DeleteNode;
    let temp = curr.next;
    curr.data = temp;
    curr.next = temp.next;
    return DeleteNode;
}
function SegregateOddOrEven(head) {
    let es = null, ee = null, os = null, oe = null;
    let curr = head;
    for (let curr = head; curr != null; curr = curr.next) {
        let data = curr.data;
        console.log(data % 2);
        if (data % 2 === 0) {
             console.log("Even",curr);
            if (es == null) {
                es = curr;
                ee = curr;
            }
            else {
                ee.next = curr;
                ee = curr;
            }
        }
        else {
             console.log("Odd",curr);
            if (os == null) {
                os = curr;
                oe = curr;
            }
            else {
                os.next = curr;
                oe = curr;
            }
        }
    }
    console.log(es,os,curr);
    if (os == null || es == null) {
        return head;
    }
    ee.next = os;
    oe.next = null;
    return es;
}
function PairSwapNodes(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let curr = head.next.next;
    let prev = head;
    head = head.next;
    head.next = prev;
    console.log(head, prev);
    while (curr != null && curr.next != null) {
        prev.next = curr.next;
        prev = curr;
        let next = curr.next.next;
        curr.next.next = prev;
        curr = next;
    }
    
    prev.next = curr;
    return head;
}
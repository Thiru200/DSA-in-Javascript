function ReverseLinkedListWithGroupBySize1(head, k) {
    let prev = null,count = 0,length = 0,next = null;   
    for (let curr = head; curr != null; curr = curr.next){
        length = length + 1;
    } 
    if (k > length || head == null || head.next == null){
        return head;
    }
    let curr = head;
    while (curr != null && count<k) {
        next = curr.next;       
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if (next != null) {
        let prev_list = ReverseLinkedListWithGroupBySize1(next, k);
        head.next = prev_list;
    }
    return prev;
}
function ReverseLinkedListWithGroupBySize2(head, k) {
    let curr = head, prevList = null;
    let isPrevNode = true;
    while (curr != null) {
        let first = curr;
        //console.log(first);
        let count = 0;
        let prev = null;
        while (curr != null && count < k) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }
        if (isPrevNode) {
            isPrevNode = false;
            head = prev;  
            prevList = first;
            console.log(prevList);
        }
        else {
            //console.log(prevList);
            prevList.next = prev;
        }
        //console.log(first);      
    }
    return head;
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let temp1 = new Node(10);
let temp2 = new Node(20);
let temp3 = new Node(30);
let temp4 = new Node(40);
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
//let myNode = new Node(20);
//myNode.next = new Node(0);
temp4.next = temp2;
//  Method 1
//console.log(ReverseLinkedListWithGroupBySize1(temp1, 2));
// Method 2
//console.log(ReverseLinkedListWithGroupBySize2(temp1,2));
class Node{
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
function InsertElementAtFirst(head,value) {
    let myNode = new Node(value);
    if (head == null) {
        return new Array(myNode, head);
    } 
    else {
        myNode.next = head;
        return new Array(myNode,head);   
    }  
}
function InsertElementAtEnd(head, x) {   
        let myNode=new Node(x);
        let curr=head;
        if(head==null){
            return myNode;
        }
        while(curr!=null && curr.next!=null){
            curr=curr.next;
        }
        curr.next=myNode;
        return head;
}
function InsertAtPosition(head,position,value) {
    let curr = head;
    let myNode = new Node(value);
    if (position == 1) {
        curr.next = myNode;
        return head;
    }
    for (let i = 1; i <= position - 2 && curr != null; i++){
        curr = curr.next;
    }
    if (curr == null) {
        return temp;
    }
    myNode.next = curr.next;
    curr.next = myNode;
    return head;
}
function SearchElement(head, element) {
    let curr = head;
    let pos = 1;
    while (curr != null) {
        if (curr.data == element) {
            return pos;
        }
        else {
            pos++;
            curr = curr.next;
        }
    }
    return -1;
}
function SearchElementWithRecursive(head, element) {
    if (head == null) {
        return -1;
    }
    if (head.data == element) {
        return 1;
    }
    else {
        let res = SearchElementWithRecursive(head.next, element);
        if (res == -1) {
            return -1;
        }
        else {
            return res + 1;
        }
    }
}
function DeleteLastElementofNode(head) {
    let curr = head;
    if (head == null) {
        return null;
    }
    if (head.next == null) {
        delete (head);
        return null;
    }
   while(curr.next.next!==null)
        curr=curr.next;
        delete(curr.next);
        curr.next = null;
    return head;
}
function InsertInSortedElement(head,x) {
    let temp=new Node(x);
    if(head===null){
        temp.next=temp;
        temp.prev=temp;
        return temp;
    }
    if(temp.data < head.data) {
        temp.next = head;
        return temp;
    }
    let curr = head;
    while(curr.next !== null && curr.next.data < x) curr=curr.next;
    temp.next=curr.next;
    curr.next=temp;
    return head;
}
function printAll(head) {
    let curr = head;  
    let data = "";
    while (curr != null) {
        data += curr.data + " ";
        curr = curr.next;
    }
    return data;
}
function printMiddleElement(head) {
    let curr;
    if (head == null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}
function printNthNodeFromLast(head,n) { 
    if (head == null)
        return null;
    let first = head;
    let second = head;
    for (let i = 0; i < n; i++){
        if (first == null) {
            return;
        }
        first = first.next;
    }
    while (first != null) {
        second = second.next;
        first = first.next;
    }
    return second.data;
}
function revLinkedlist(head) {
    if (head == null)
        return null;
    let prev = null;
    let curr = head;
    while (curr != null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
function revLinkedlist1(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let rev_list = revLinkedlist1(head.next);
    let rev_tail = head.next;
    rev_tail.next = head;
    head.next = null;
    return rev_list;
}
function revLinkedlist2(curr, prev = null) {  
    if (curr == null) {
        return prev;
    }
    let next = curr.next;
    curr.next = prev;
    return revLinkedlist2(next, curr);
}
function RemoveDuplicateElement(head) {
    let prev = head;
    let curr = head;
    while (curr != null) {
        if (curr.data != prev.data) {
            prev.next = curr;
            prev = curr;
        }
        curr = curr.next;
    }
    if (prev !== curr) {
        prev.next = null;
    }
    return head;
}
function RemoveDuplicateElement1(head) {
    let curr = head;
    while (curr != null && curr.next != null) {
        if (curr.value === curr.next.data) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    }
    return head;
}
function swapkthnode(head,k)
{  
        let arr1=[];
        let arr2=[];
        let curr=head;
        while(curr!=null){
            arr1.push(curr.data);
            arr2.push(curr.data);
            curr=curr.next;
        }
        arr2 = arr2.reverse();       
        if(k>arr1.length){
            return head;
        }
        let F1=arr1[k-1];
        let F2 = arr2[k - 1];
        console.log(F1, F2);
        arr1[k-1]=F2;
        arr1[arr1.length - k] = F1;
        curr = InsertElementAtEnd(null,arr1[0]);
        for(let i=1;i<arr1.length;i++){
            curr = InsertElementAtEnd(curr, arr1[i]);
            console.log(curr,arr1);
        }
        return curr;   
}
function swapkthnode1(head,num,K) {
     //if k is more than number of nodes or kth node from beginning 
        //and end are same, we return the list.
        if (K > num) 
          return head;
        if(2 * K - 1 === num) return head;
        
        let x_prev = null;
        let x = head;
        
        let y_prev = null;
        let y = head;
        
        let count = K - 1;
        //finding the kth node from the beginning of list. We also find node
        //previous of kth node because we need to update next pointer of 
        // the previous node.
        while (count--) {
            console.log("Loop", x);
            x_prev = x;
            x = x.next;
        }
        count = num - K;
        //similarly, finding the kth node from end and its previous node. kth 
        //node from end is (num-k+1)th node from beginning .
        while(count--){
            y_prev = y;
            y = y.next;
        }
        
        //if x_prev exists, then new next of it will be y.
        if(x_prev)
            x_prev.next = y;
        //if y_prev exists, then new next of it will be x.
        if(y_prev)
            y_prev.next = x;
        //then we will swap the next pointers of x and y.    
         let temp = x.next;   
        x.next = y.next;
        y.next = temp;
        console.log(y_prev,temp, x.next, y.next);
        //console.log(x, x_prev, y, y_prev,temp);
        //changing head pointers when k is 1 or num.
        // if(K == 1)
        //     return y;
        // if(K == num)
        //     return x;
        // return head;  
}
function ReverseLinkedListWithSize(head, k) {
    if (head == null) {
        return null;
    }
    let curr = head;
    let next = null;
    let prev = null;
    let count = 0;
    while (curr != null && count<k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if (next != null) {
        let rev_list = ReverseLinkedListWithSize(next, k);
        head.next = rev_list;
    } 
    return prev;
}
function ReverseLinkedListWithGroupSize(head, k) {
    let curr = head, prevFirst = true;
    let IsPrevFirst = true;
    while (curr != null) {
        let first = curr;
        let prev = null;
        let count = 0;
        while (curr != null && count < k) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }
        if (IsPrevFirst) {
            IsPrevFirst = false;
            head = prev;
        }
        else {
            prevFirst.next = prev;
        }
        //console.log(first);
        prevFirst = first;
    }
    return head;
}
function IsLoop(head) {
    let temp=new Node(0);
    let curr=head;
    while (curr !== null) {  
        if (curr.next==null)
            return false;
        if(curr.next==temp)
            return true;
        let curr_next=curr.next;
        curr.next=temp;
        curr=curr_next;
    } 
    return false; 
}
let head1 = new Node(1);
let head2 = new Node(2);
//let head3 = new Node(3);
//let head4 = new Node(4);
//let myNode = new Node(5);
head1.next = new Node(2);
//head2.next = head3;
//head3.next = head4;
//head4.next = null;
//myNode.next = head2;
//head4.next = new Node(2);
//myNode.next = head2;
//head.next.next.next.next = myNode;

//head= InsertElementAtEnd(head, 1);
//head.next = loopNode;
//head = printMiddleElement(head);
//head = RemoveDuplicateElement(head);
//head = swapkthnode1(head,4,2);
//head = revLinkedlist2(head,null);
//head = printNthNodeFromLast(head, 2);
//head = ReverseLinkedListWithGroupSize(head, 2);
console.log(head1,IsLoop(head1),"t");

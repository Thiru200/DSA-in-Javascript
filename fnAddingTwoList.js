function addTwoLists(num1, num2) {
        num1=num1.toString().split(" ").join("");
        num2=num2.toString().split(" ").join("");
        let sum=parseInt(num1)+parseInt(num2);
        let resultNode=sum.toString().split('');
        let curr=null,head=null;
        for(let i=0;i<resultNode.length;i++){
            let myNode=new Node(parseInt(resultNode[i]));
            if(resultNode[i+1]==null){
                myNode.next=null;
            }
            else{
                myNode.next=parseInt(resultNode[i+1]);
            }
            if(curr==null){
                curr=myNode;
                head=curr;
            }
            else{
                curr.next=myNode;
                curr=myNode;
            }
        }
        return head;
}
function fnReverseList(head) {
    let curr = head;
    let prev = null;
    while (curr != null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
} 
function fnaddTwoLists(num1, num2) {
    num1 = fnReverseList(num1);
    num2 = fnReverseList(num2);

    let carry = 0;
    let sum = null;
    while (num1 != null || num2 != null || carry !== 0) {       
        let nodeVal = carry;
        if (num1)
            nodeVal= nodeVal + num1.data;
        if (num2) {
             nodeVal= nodeVal + num2.data;
        }
        carry = Math.floor(nodeVal / 10);
        nodeVal = nodeVal % 10;

        let myNode = new Node(nodeVal);
        myNode.next = sum;

        sum = myNode;

         if (num1)
            num1= num1.next;
        if (num2) {
             num2= num2.next;
        }
    }
    while (sum != null && sum.data === 0) {
        let temp = sum.next;
        sum.next = null;
        sum = temp;
    }
    if (sum == null) {
        return new Node(0);
    }
    return sum;
}

console.log(addTwoLists('4 5','3 5 5'));
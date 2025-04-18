function getKthFromLast(head, k)
{
        let length=0;
        let curr=head;
        if(curr==null){
            return -1;
        }
        while(curr!=null){
            curr = curr.next;        
            length++;
    }
        if(length<k){
            return -1;
        }
        curr=head;
        for(let i=1;i<(length-k+1);i++){
            curr=curr.next;
        }
        return curr.data;
}
console.log(getKthFromLast(head1,1));
function countNodesinLoop(head)
    {
        //using two pointers and moving one pointer(slow) by one node and 
        //another pointer(fast) by two nodes in each iteration.
        let fast = head.next;
        let slow = head;
         
        while( fast !== slow )
        {
            //if the node pointed by first pointer(fast) or the node
            //next to it is null, then loop is not present so we return 0.
            console.log("The fast is", fast,slow);
            if( fast === null || fast.next === null ) 
            return 0;
            
            fast = fast.next.next;
            slow = slow.next;
         }
        console.log("The fast is", fast);
        //both pointers now point to the same node in the loop.
        
        let size = 1;
        fast = fast.next;
        //we start iterating the loop with first pointer and continue till 
        //both pointers point to same node again.
        while( fast !== slow )
        {
            fast = fast.next;
            //incrementing the counter.
            size++;
        }
        //returning the length of the loop.
        return size;
}
//console.log(countNodesinLoop(head));
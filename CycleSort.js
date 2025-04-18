function cycleSort(arr,n){
    for(let cs=0;cs<n-1;cs++){
        let item=arr[cs];
        let pos=cs;
        for(let i=cs+1;i<n;i++)
            if(arr[i]<item)
                pos++;                      
        [item,arr[pos]]=[arr[pos],item];
        while(pos!=cs){
            pos=cs; 
            for(let i=cs+1;i<n;i++)
                if(arr[i]<item)
                    pos++;
            [item,arr[pos]]=[arr[pos],item];
        }
    }
    return arr;
}
console.log(cycleSort([20,10],2));

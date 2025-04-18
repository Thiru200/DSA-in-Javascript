function fnCountElementOccurrance(arr,element,N){
        let low = 0, high = N-1;
        let mid = Math.floor((low+high)/2);
        
        // binary search to count 1s
        while(low <= high){
            mid = Math.floor((low+high)/2);
            
            // check if mid is 1
            if(arr[mid] == element && mid+1 < N && arr[mid+1] == element){
                low = mid+1;
            }
            
            // if mid is not 0, then iterate for lower half
            else if(arr[mid] == 0){
                high = mid-1;
            }
            
            // else iterate for upper half
            else if(arr[mid] == element && ((mid+1 < N && arr[mid+1] == 0) || (mid == N-1))){
                return mid+1;
            }
        }
        return 0;
}
console.log(fnCountElementOccurrance([1,1,1,1,0,0,0],1,6));
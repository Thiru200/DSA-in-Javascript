function fnfindLastOccurranceOfArray(arr,x,low,high){
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]===x){
            if(mid===arr.length-1||arr[mid+1]!==x){
                return mid;
            }
            else{
                low=mid+1;
            }
        }
        else if(arr[mid]<x){
            low=mid+1;
        }
        else{
            high=mid-1
        }
    }
    return -1;
}
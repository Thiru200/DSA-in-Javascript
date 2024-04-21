function ArrangeNumberInOrder(arr,n){
    let low=0;mid=0;high=n-1;
    while(mid<=high){
        if(arr[mid]==0){
            [arr[mid],arr[low]]=[arr[low],arr[mid]];
            mid++;low++
        }
        else if(arr[mid]==1){
            mid++;
        }
        else{
            [arr[mid],arr[high]]=[arr[high],arr[low]];
            high--;
        }
    }
    return arr;
}
let ArrangeNumInOrder=[0,1,1,2,0];
ArrangeNumInOrderSize=ArrangeNumInOrder.length;
console.log(ArrangeNumberInOrder(ArrangeNumInOrder,ArrangeNumInOrderSize));
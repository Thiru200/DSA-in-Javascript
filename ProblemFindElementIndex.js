function fnFindElementIndex(arr,N,X){
    let low=0;
    let high=arr.length-1;
    while(high>=low){
        let mid=1+ Math.floor((low-high)/2);
        if(arr[mid]===X){
            return mid;
        }
        else if(arr[mid]>=X){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return -1;
}
let myArray=[1,2,3,4];
console.log(fnFindElementIndex(myArray,4,3));
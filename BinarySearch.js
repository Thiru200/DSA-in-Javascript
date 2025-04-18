function fnBinarySearch(arr,x){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]===x){
            return mid;
        }
        else if(arr[mid]<x){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return -1;
}
let myArr1=[10,20,30,40,50];
let SearchIndex1=fnBinarySearch(myArr1,30);
console.log(myArr1[SearchIndex1]);
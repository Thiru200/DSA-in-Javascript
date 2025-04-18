function fnfindFirstOccurranceOfArray(arr,x,low,high){
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]===x){
            if(mid===0||arr[mid-1]!==x){
                return mid;
            }
            else{
                high=mid-1;
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
let myArr2=[10,20,20,40,40];
let SearchIndex2=fnfindFirstOccurranceOfArray(myArr2,20,0,myArr2.length-1);
console.log(myArr2[SearchIndex2],SearchIndex2);
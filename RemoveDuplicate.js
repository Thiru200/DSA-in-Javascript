function fnRemoveDuplicate(arr){
    let res=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]!=arr[i]){
            arr[res]=arr[i];
            res++;
        }
    }
    return res;
}
let arr=[1,2,3,4,5,5];
console.log("Before Duplicate Removing "+ arr);
let n=fnRemoveDuplicate(arr);
console.log("After Duplicate Removing "+ arr.slice(0,n));
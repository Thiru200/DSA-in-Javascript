function fnSelectionSort(arr,n){
for(let i=0;i<n;i++){
    let mid_index=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[mid_index]){
            mid_index=j;
        }
    }
    [arr[i],arr[mid_index]]=[arr[mid_index],arr[i]]
}
return arr;
}
let sortArr=[2,1,3,4];
console.log(fnSelectionSort(sortArr,4));

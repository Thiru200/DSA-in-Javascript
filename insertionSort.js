function fnInsertionSort(arr,n){
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}
let insertSortArr=[50,40,30,20,10];
console.log(fnInsertionSort(insertSortArr,insertSortArr.length));
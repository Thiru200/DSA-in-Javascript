function SortAnArray(arr,n){
    let i=-1;j=n;
    while(true){
        do{
            i++;
        }while(arr[i]<0)
        do{
            j--;
        }while(arr[j]>=0)
        if(i>=j) return arr;
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}
console.log(SortAnArray([8,9,-1,2],4));
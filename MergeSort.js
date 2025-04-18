function fnMergeSort(arr1,arr2,m,n){
    let i=0;j=0;k=0;
    let c=[];
    while(i<m && j<n){
        if(arr1[i]<arr2[j]){
           c[k]=arr1[i];
           k++;i++; 
        }
        else{
            c[k]=arr2[j];
            k++;j++; 
        }
    }
    while(i<m){
        c[k]=arr1[i];
        k++;i++;
    }
    while(j<n){
        c[k]=arr2[j];
        k++;j++;
    }
    return c;
}
let arr1=[10,15,20,40];
let arr2=[5,6,6,10,15];
let m=arr1.length;
let n=arr2.length;
console.log(fnMergeSort(arr1,arr2,m,n));
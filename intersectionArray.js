function fnIntersectionArr(a,b,m,n){
let i=0;j=0;k=0;
let arr=[];
while(i<m && j<n){
    if(i>0 && a[i-1]==a[i]){
         i++;
        continue;
    }
    if(a[i]<b[j]){
        i++;
    }
    else if(a[i]>b[j]){
        j++;
    }
    else{
        arr[k]=a[i];
        i++;j++;k++;
    }  
}
return arr;
}
let array1=[1,2,3,4,5];
let array2=[2,3,10];
let array1Len=array1.length;
let array2Len=array2.length;
let c =fnIntersectionArr(array1,array2,array1Len,array2Len);
console.log(c);


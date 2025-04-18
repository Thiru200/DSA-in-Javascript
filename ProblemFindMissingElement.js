function findMissing(arr,n){
    let arrSplit=segregateArr(arr,n);
    return findMissingIndex(arr.slice(arrSplit),n-arrSplit);
 }
 function segregateArr(arr,n){
     let j=0;
     for(let i=0;i<n;i++){
         if(arr[i]<=0){
             let temp=arr[i];
             arr[i]=arr[j];
             arr[j]=temp;
             j++;
         }
     }
     return j;
 }
function findMissingIndex(arr,n){
     for(let i=0;i<n;i++){
         if(Math.abs(arr[i])-1<n && arr[Math.abs(arr[i])-1]>0){
             arr[Math.abs(arr[i])-1]=-arr[Math.abs(arr[i])-1];
         }
     }
     for(let i=0;i<n;i++){
         if(arr[i]>0){
             return i+1;
         }
     }
     return n+1;
 }

 let a1 =[1,-10,-5];
 //console.log(findMissing(a1,a1.length));

 const check_duplicate_in_array=(input_array)=>{
    const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
    console.log("Duplicate Array",duplicates);
    return Array.from(new Set(duplicates));
}
const arr1=[1,1,2,2,3,3,4,5,6,1];
console.log(check_duplicate_in_array(arr1));
function countSort(arr, n, k) 
{ 
    let count = [];
    for(let i=0;i<k;i++)
        count[i]=0;
    for(let i=0;i<n;i++)
        count[arr[i]]++;   
    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i]; 
    }      
    let output = [];
    for(let i=n-1;i>=0;i--){
        output[count[arr[i]]-1]=arr[i];     
        count[arr[i]]--;
    }
    for(let i=0;i<n;i++)
        arr[i]=output[i];
    return arr; 
} 
let arr = [ 1,4,4,1,0,1 ]; 
let size = arr.length; 
let k=5;
arr = countSort(arr, size, k); 
console.log(arr);
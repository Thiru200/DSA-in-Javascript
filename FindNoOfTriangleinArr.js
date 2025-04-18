function findNumberOfTraingleinArr(arr,n){
    arr.sort(function(a,b){return a-b});
    let count=0;
    for(let i=0;i<n-2;i++){
        let k=i+2;
        for(let j=i+1;j<n;j++){
            while(k<n && arr[i]+arr[j]>arr[k]){
                ++k;
                count+=k-j-1;
            }
        }
    }
    return count;
}
let TriangleArr=[3,5,4];
TriangleArrSize=TriangleArr.length;
console.log(findNumberOfTraingleinArr(TriangleArr,TriangleArrSize));
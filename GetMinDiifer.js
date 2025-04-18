function fnGetMinDifference(arr,n){
    arr.sort(function(a,b){return a-b});
    let res=1000000000;
    for(let i=1;i<n;i++){
        res=Math.min(res,arr[i]-arr[i-1]);
    }
    return res;
}
console.log(fnGetMinDifference([10,3,6],3))
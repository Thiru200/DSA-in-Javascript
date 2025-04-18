function MinimumDifference(arr, n) {
    let minValues=[];
    arr.sort(function(a,b){return a-b});
    for(let i=1;i<n;i++){
        let currentValue=arr[i]-arr[i-1];
        minValues.push(currentValue);
    }
    let res=Math.min(...minValues);
    return res;
  }
let SortArr1=[2,4,9,7];
let SortArr1Size=SortArr1.length;
console.log(MinimumDifference(SortArr1,SortArr1Size));
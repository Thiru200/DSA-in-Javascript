function fnMedian(arr,n)
{
    arr.sort(function(a, b){return a - b});
    let median=0;
    let index=Math.floor(n/2);
    if(arr.length%2===0){
        median=Math.floor((arr[index-1]+arr[index])/2); 
        return median
    }
    else{
        median=arr[index];
    }
    return median;
}
function fnMean(arr,n)
{
    arr=arr.sort(function(a, b){return a - b});
    let mean=Math.floor(arr.reduce(getSum,0)/n);
    let median=fnMedian(arr,n);
    return mean;
}
function getSum(total, num) 
{
    return total + Math.round(num);
}
console.log(fnMean([10,10,10,10,10],5));
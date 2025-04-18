function checkRotatedAndSorted(arr, num)
{
    return (increasingOrder(arr, num) || decreasingOrder(arr, num))
}
function increasingOrder(arr,n)
{
    let i=0;
    while(i<n-1 && arr[i]<=arr[i+1]) i++;1
    if(i===n-1)
    {
        return false;
    }
    i++;
    while(i<n-1 && arr[i]<=arr[i+1]) i++;
    if (i == n - 1 && arr[n - 1] <= arr[0])
        return true;
    else
        return false;
}
function decreasingOrder(arr,n)
{
    let i=0;
    while(i<n-1 && arr[i]>=arr[i+1]) i++;
    if(i==n-1)return false;
    i++;
    while(i<n-1 && arr[i]>=arr[i+1]) i++;
    if (i == n - 1 && arr[n - 1] >= arr[0])
        return true;
    else
        return false;
}
console.log(checkRotatedAndSorted([3,4,1,2],4));
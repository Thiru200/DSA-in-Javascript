function quickSort( arr,  low, high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[p] is now
           at right place */
        let pi = partition(arr, low, high);
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
function partition(arr, l, h)
{   
    
    let pivot = arr[h];
    let i=l-1;
    let j=0;
    for( j=l;j<=h-1;j++){
        if(arr[j]<pivot){
            console.log("inner");
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]];
    return i+1;
}
let QuickSortArr = [3,2];
let arrSize = QuickSortArr.length;
quickSort(QuickSortArr,0,arrSize-1);
console.log(QuickSortArr);
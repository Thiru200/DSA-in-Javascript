function fnIPartition(arr,l,h){
    let pivot = arr[h];
    let i = l-1;
    for(let j = l; j <= h-1; j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]];
    return arr;
}
let IPartitionArr=[10,80,30,90,40,50,70];
console.log(fnIPartition(IPartitionArr,0,IPartitionArr.length-1));

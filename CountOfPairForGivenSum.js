
let arr3 = [1, 5, 7, -1, 5];
arr3.sort((function (a, b) { return a - b; }));
function CountOfPairForGivenSum(arr, l, h, sum) {
    let mp = new Map();
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (mp.has(sum - arr[i]))
        {
            count += mp.get(sum - arr[i]);
        }
        else if (mp.has(arr[i])) {
            mp.set(mp.get(sum - arr[i]), mp.get(sum - arr[i]) + 1);
        }
        else {
            mp.set(arr[i],1);
        }
    }
    return count;
}
console.log(CountOfPairForGivenSum(arr3,0,arr3.length-1,6));
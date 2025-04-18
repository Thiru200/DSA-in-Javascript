function SubArrayWithSumZero(arr) {
    let mySet = new Set();
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        if (sum == 0 || mySet.has(sum)) {
            return true;
        }
        mySet.add(sum);
    }
    return false;
}
console.log(SubArrayWithSumZero([-3, 2, 3, 1, 6]))
function UnionArray(arr1,arr2,m,n) {
    let UnionArr = [];
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            UnionArr.push(arr1[i]);
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            UnionArr.push(arr2[j]);
            j++;
        }
        else {
            UnionArr.push(arr1[i]);
            i++; j++;
        }
    }
    while (i < m) {
        UnionArr.push(arr1[i]);
        i++;
    }
    while (j < n) {
        UnionArr.push(arr2[j]);
        j++;
    }
    return UnionArr;
}
function Intersection(arr1,arr2,m,n) {
    let IntersectionArr = [];
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr1[i]>arr2[j]) {
            j++;
        }
        else {
            IntersectionArr.push(arr1[i]);
            i++; j++;
        }
    }
    return IntersectionArr;
}
function UnionOfArrWithSet(arr1,arr2,m,n) {
    let mySet = new Set();
    let i = 0, j = 0;
    while (i < m ) {
        mySet.add(arr1[i]);
        i++;
    }
    while (j < n) {
        mySet.add(arr2[j]);
        j++;
    }
    return mySet;
}
let arr1 = [10, 20, 20, 30, 40];
let arr2 = [10, 20, 40, 60];
console.log(UnionArray(arr1,arr2,arr1.length,arr2.length));
console.log(Intersection(arr1, arr2, arr1.length, arr2.length));
console.log(UnionOfArrWithSet(arr1, arr2, arr1.length, arr2.length));
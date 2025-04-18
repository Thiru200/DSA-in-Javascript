function partition(arr, l, h)
{   
    let pivot = arr[h];
    let i=l-1;
    for(let j=l;j<=h-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]];
    return i+1;
}

function kthSmallest(arr, n, k) {
    let l=0,r=n-1;
    while(l<=r){
        let p=partition(arr,l,r);
        if(p==k-1)
            return p;
        else if(p>k-1)
            r=p-1;
        else
            l=p+1;
    }
    return -1;
}
let KthElementArr=[10,4,5,6];
let index=kthSmallest(KthElementArr,KthElementArr.length,2);
console.log(KthElementArr,index,KthElementArr[index]);
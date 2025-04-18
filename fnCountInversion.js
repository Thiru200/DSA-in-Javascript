function countAndMerge(arr, l, m, r)
{
    let n1=m-l+1, n2=r-m;
    let left = []; let right = [];
    for(let i=0;i<n1;i++)
        left[i]=arr[i+l];
    for(let j=0;j<n2;j++)
        right[j]=arr[m+1+j];    
    let res=0,i=0,j=0,k=l;
    while(i<n1 && j<n2){
        if(left[i]<=right[j])
            {arr[k++]=left[i++];}
        else{
            arr[k++]=right[j++];
            res=res+(n1-i);
        }
    }
    while(i<n1)
        arr[k++]=left[i++];
    while(j<n2)
        arr[k++]=right[j++];
    return res;
}
function countInv(arr, l, r)
{
    let res = 0;
    if (l<r) {
       
        let m = Math.floor((r + l) / 2);
 
        res += countInv(arr, l, m);
        res += countInv(arr, m + 1, r);
        res += countAndMerge(arr, l, m , r);
    }
    return res;
}

function fnCallCountInver(arr,N){
    console.log(countInv(arr,0,N-1));
}
fnCallCountInver([2,4,1,3,5],5);

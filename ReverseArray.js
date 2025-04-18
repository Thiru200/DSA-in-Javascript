function reverseInGroups(arr, n, K){
    // let arr1=arr.slice(0,K);
    // arr1=arr1.sort(function(a,b){return b-a});
    // let arr2=arr.slice(K,n);
    // arr2=arr2.sort(function(a,b){return b-a});
    // let arrMerge=arr1.concat(arr2);
    // return isReversed(arrMerge);
    let arr1=[],arr2=[];
        arr1=isReversed(arr,0,K);
        arr1=arr1.sort(function(a,b){return b-a});
        arr2=isReversed(arr,K,n);
        arr2=arr2.sort(function(a,b){return b-a});
        let arrMerge=arr1.concat(arr2);
        let result=[];   
        for(let j=0;j<arrMerge.length;j++)
        {
            result.push(arrMerge[j]);
        }    
        return result;
}
function isReversed(arr1,start,end){
    let result=[];
        for(let i=start;i<end;i++)
        {
            result.push(arr1[i]);
        }
        return result;
}
let arr1=[36,93, 64, 48, 96, 55, 70, 0, 82, 30, 16, 22, 38, 53, 19, 50, 91, 43, 70, 88, 10, 57, 14, 94, 13, 36, 59, 32, 54, 58, 18, 82, 67];
console.log(reverseInGroups(arr1,33,13));
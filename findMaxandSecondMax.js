function fnMaxnadSecondMax(arr,sizeOfArray){
    let result=[];
       if(sizeOfArray===arr.length && fnRemoveDuplicate(arr).length===1){
           result.push(arr[sizeOfArray-1]);
           result.push(-1);
           return result;
       }
       arr.sort(function(a,b){return a-b});
       arr=fnRemoveDuplicate(arr);
       arr=fnFirstandSecondLargest(arr);
       return arr;
}
function fnRemoveDuplicate(arr){
    let res=1;
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]!==arr[i]){
                arr[res]=arr[i];
                res++;
            }
        }
        let myArray=arr.slice(0,res);
        return myArray;
}
function fnFirstandSecondLargest(arr){
    let first=0,second=-1;
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]<arr[i]){
                second=first;
                first=i;
            }
            else if(arr[i-1]>arr[i]){
                if(second===-1 || arr[second]<arr[i]){
                    second=i;
                }
            }
        }
        let result=[];
        result.push(arr[first]);
        result.push(arr[second]);
        return result;
}
console.log(fnMaxnadSecondMax([100,1000,100],3))

function subArrayExists(arr, n){
        let prefixSum=0;
        let remove=0;
        let flag=false;
        let hm=new Map();
        hm.set(0,1);
        for(let i=0;i<arr.length;i++){
            prefixSum=prefixSum+arr[i];
            remove=prefixSum-0;
            if(hm.has(remove)){
                flag= true;
                break;
            }
            hm.set(arr[i],1);
        }
        return flag;
}
let myArr = [5,-4,-3,-1];
subArrayExists(myArr,n);
    
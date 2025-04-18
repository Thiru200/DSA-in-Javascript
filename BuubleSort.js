function fnBubbleSort(arr,n){
    for(let i=0;i<n;i++){
        let sorted=false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                sorted=true;
            }
        }
        if(sorted==false){
            break;
        }
    }
    return arr;
}
let buubleArr1=[10,8,20,5];
let buubleArr2=[10,20,40,30];
console.log(fnBubbleSort(buubleArr1,4));
console.log(fnBubbleSort(buubleArr2,4));
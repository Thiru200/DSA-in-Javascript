function fnFindOccurranceCount(arr,x,low,high){
    let firstOccurranceCount=fnfindFirstOccurranceOfArray(arr,x,low,high);
    if(firstOccurranceCount===-1){
        return 0
    }
    else{
        return (fnfindLastOccurranceOfArray(arr,x,low,high)-firstOccurranceCount+1);
    }
}
let myArr3=[10,10,10,20,30,30];
let count=fnFindOccurranceCount(myArr3,30,0,myArr3.length-1);

function  sortABS(arr, N, K)
{
    // let result=[];
    // for(let i=0;i<N;i++){
    //     let newArr=[];
    //     newArr.push(arr[i]);
    //     newArr.push(Math.abs(K-arr[i]));
    //     result.push(newArr);
    // }
    // result.sort(function(a,b){return a[1]-b[1]});
    // result.forEach((item,index)=>{
    //     if(Array.isArray(item) && item.length>0){
    //         result[index]=item[0];
    //         arr[index]=item[0]
    //     }
    // }); 
    arr.sort(function(a,b){
        let a_diff=Math.abs(a-K);
        let b_diff=Math.abs(b-K);
        console.log(a,b,a_diff,b_diff);
        return a_diff-b_diff;
     });
}
let myArr=[10,5,3,9,2];
sortABS(myArr,myArr.length,7);
console.log(myArr);
/* Method 1 */
function SortAnArrayWithOthers1(A1, M, A2, N) {
        let myArr=[];
        for(let i=0;i<M;i++){
            var num = A2[i];
            if (A1.includes(num)) {
                for (let j = 0; j < A1.length; j++){             
                if(num==A1[j]){
                    let index=A1.indexOf(num);
                    A1[index]=-1
                    myArr.push(num);
                }
             }
            }           
        }
        if(myArr.length==0){
            return A1.sort(function(a,b){return a-b;});
        }
        else if(A1.length!=0){
            A1.sort(function(a,b){return a-b;});
            for (let i = 0; i < A1.length; i++){
                if ((A1[i] != -1)) {
                    myArr.push(A1[i]);
                }
            }
            return myArr;
    }
}
function SortAnArrayWithOthers2(arr1, M, arr2, N) {
    let myArr = [];
    let hm = new Map();
    for (let i = 0; i < M; i++){
        if (hm.has(arr1[i])) {
            hm.set(arr1[i],hm.get(arr1[i])+1)
        }
        else {
             hm.set(arr1[i],1)
        }
    }
    for (let j = 0; j < N; j++){
        let freq = hm.get(arr2[j]);
        while (freq) {
            myArr.push(arr2[j]);
            freq--;
        }
        hm.set(arr2[j], 0);
    }
    arr1.sort(function (a, b) { return a - b; });
    let set = new Set(arr1);
    let arr3 = new Array(...set);  
    for (let i = 0; i < arr3.length; i++){
        let freq = hm.get(arr3[i]);
        while (freq) {
            myArr.push(arr3[i]);
            freq--;
        }        
    }
    return myArr;
}
let myArr1 = [45 ,15 ,23 ,8 ,5 ,12 ,26 ,444 ,888 ,151 ,12 ,23 ,45 ,15 ,56];
let myArr2 = [15 ,888 ,444 ,5 ,8 ,12 ,23];
console.log("SortAnArrayWithOthers2 "+SortAnArrayWithOthers2(myArr1, myArr1.length, myArr2, myArr2.length));


function fnfindminDiff(arr,m,n){
if(m>n){
    return -1;
}
arr.sort(function(a,b){return a-b;});
let res=arr[m-1]-arr[0];
for(let i=0;(i+m-1)<n;i++){
    res=Math.min(res,arr[i+m-1]-arr[i]);
}
return res;
}
let minDiffArr=[5,2,10,6];
let m=3;
console.log(fnfindminDiff(minDiffArr,m,minDiffArr.length));


/* iteration 1=>
        if(m>n)=>2>3 
            false;
        arr.sort();
        [1,2,3]
        let res=arr[m-1]-arr[0];
        res=1;
        for(let i=0;(i+m-1)<n;i++)
        --------------------------------------------
        =>
        i=0;(0+2-1)<7;0{ 1<3
            res=Math.min(res,arr[i+m-1]-arr[i]);
            => Math.min(1,arr[1]-arr[0])=>Math.min(1,1);
        }
        -----------------------------------------------
        =>
        i=1;(1+2-1)<7;1{ 2<3
            => Math.min(1,arr[2]-arr[0])=>Math.min(1,2);
        }
        -----------------------------------------------
        =>
        i=2;(2+2-1)<7;2{ 3<3
            => Math.min(1,arr[2]-arr[0])=>Math.min(1,2);
        }
        res=2;

    iteration 2=>
        if(m>n)=>3>4 
            false;
        arr.sort();
        [2,5,6,10]
        let res=arr[m-1]-arr[0]; arr[3-1]-arr[0];
        res=1;
        for(let i=0;(i+m-1)<n;i++)
        --------------------------------------------
        =>
        i=0;(0+2-1)<7;0{ 1<3
            res=Math.min(res,arr[i+m-1]-arr[i]);
            => Math.min(1,arr[1]-arr[0])=>Math.min(1,1);
        }
        -----------------------------------------------
        =>
        i=1;(1+2-1)<7;1{ 2<3
            => Math.min(1,arr[2]-arr[0])=>Math.min(1,2);
        }
        -----------------------------------------------
        =>
        i=2;(2+2-1)<7;2{ 3<3
            => Math.min(1,arr[2]-arr[0])=>Math.min(1,2);
        }
        res=2;



Answer => 2 */












function check(A,B,N){
    let hm1=new Map();
    let hm2=new Map();
    let result=1;
    A.sort(function(a,b){return a-b;});
    B.sort(function(a,b){return a-b;});
    for(let i=0;i<N;i++){
        if(!hm1.has(A[i])){
            hm1.set(A[i],1);
        }
        else{
            hm1.set(A[i],hm1.get(A[i])+1);
        }
    }
    for(let i=0;i<N;i++){
        if(!hm2.has(B[i])){
            hm2.set(B[i],1);
        }
        else{
            hm2.set(B[i],hm2.get(B[i])+1);
        }
    }
    for(let i=0;i<N;i++){
        let v1=hm1.get(A[i]);
        let v2=hm2.get(B[i]);
        if(v1!=v2 || A[i]!=B[i]){
            result=0;
            break;
        }
    }
    return result;
}
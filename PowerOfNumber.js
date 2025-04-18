function PowerOfNumber(x,n){
    if(n==0)return 1;
    let pow=1;
    for (let i=0;i<n;i++){
        pow=pow*x;
    }
    return pow;
}

console.log(PowerOfNumber(2,5));
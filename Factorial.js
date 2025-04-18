function FactorialOfNumber(n){
    if(n==0|| n==1)
    return 1;
    let result=1;
    for(let i=2;i<=n;i++) result*=i;
    return result;
}
console.log("The factorail of given number 5 is "+FactorialOfNumber(5))
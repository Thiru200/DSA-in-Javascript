function SieveOfEratosthenes(n) {
    let prime=[];
    for (let i=0;i<=n;i++){
        prime[i]=true;
    }
    for(let p=2;p*p<=n;p++){
        if(prime[p]===true){
            for(let i=p*p;i<=n;i=i+p){
                prime[i]=false;
            }
        }
    }
    let result=[];
    for(let j=2;j<=n;j++){
        if(prime[j]){
            result.push(j);
        }
    }
    return result;
}
console.log(SieveOfEratosthenes(10));
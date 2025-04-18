function CountOfFactorial(n){
let Counter=0;
let result=1;
if(n==0||n==1)return 1;
for(let i=0;i<=n;i++){
result*=i;
}
return Math.floor(Math.log10(result));
}
console.log(CountOfFactorial(5));
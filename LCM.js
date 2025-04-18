function LCM(a,b){
    return (a/GCD(a,b))*b
}
function GCD(a,b)
{
    return b===0?a:GCD(b,a%b);
}
console.log("The LCM of given numbers is",LCM(15,20));
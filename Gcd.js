function GCD(a,b)
{
    return b===0?a:GCD(b,a%b);
}
console.log("The GCD Of given two number is "+GCD(15,20));
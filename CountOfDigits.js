function CountOfDigits(n)
{
    if(n==0)
    return 1;
    let Count=0;
    while(n!==0){
        n=Math.floor(n/10);
        Count++;
    }
    return Count;
}
console.log("Count of given number is "+CountOfDigits(5000));
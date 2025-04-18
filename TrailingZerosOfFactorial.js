function TrailingZeros(n){
    if(n<0)return -1;
    let count=0;
    for (let i=5;n/i>=1;i*=5){
        count+=Math.floor(n/i);
    }
    return count;
}

console.log("The TrailingZeros of given number 100 is "+TrailingZeros(3));
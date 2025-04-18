// function PrintDivisor(n){
//     let i=1;
//     for(i=1;i*i<=n;i++){
//         if(n%i===0){
//             console.log("The divisor are "+i);
//         }
//     }
//     for(;i>=1;i--){
//         if(n%i==0){
//             console.log("The divisor are "+n/i);
//         }
//     }
// }
function PrintDivisor(n)
{
    let Counter=0;
    for(let i=1;i<=n;i++){
        console.log(i,getDivisor(i));
        if(getDivisor(i).length===3){
            Counter++;
        }
    }
    return Counter;
}
function getDivisor(n)
{
    let count=0,i=1;
    let result=new Array();
    for(i;i<=n;i++)
    {
        if(n%i==0){
            result.push(i);
        }
    }
    
    return result;
}
console.log("The Divisor Count are "+PrintDivisor(6));
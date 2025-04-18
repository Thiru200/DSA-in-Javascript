function findPlatform(arr, dep, n)
{
    let order = [];
    for (let i = 0; i < n; i++) {
        order.push([arr[i], 0]);
        order.push([dep[i], 1]);
    }
    order.sort(function (a, b) {
                if(a[0] == b[0])
                    return a[1] - b[1];
                return a[0] - b[0];
            });
    let result = 1;
    let plat_needed = 0;
    let it = 0;
    for (; it < order.length ; it++) {
        
        //if the second value is 0 which stands for arrival then we add 1 to
        //platform needed else we subtract 1 from platform needed.
        if (order[it][1] == 0)
            plat_needed++;
        else
            plat_needed--;

        //we keep updating the value of result.
        if (plat_needed>result)
            result = plat_needed;
    }
    //returning the minimum number of platforms required.
    return result;
}

let Arrival=[900,940,950,1100,1500,1800];
let Departure=[910,1200,1120,1130,1900,2000];
let ArraySize=6;
console.log(findPlatform(Arrival,Departure,ArraySize));

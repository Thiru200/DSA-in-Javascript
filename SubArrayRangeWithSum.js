function subArrayRangeWithSum(arr, n, sum) {
    let prefixSum=0;
        let count=0;
        let hm=new Map();
        hm.set(0,1);
        for(let i=0;i<n;i++){
            prefixSum+=arr[i];
            let remove=fnValidateNullOrEmpty(hm.get(prefixSum-sum));
            count+=fnValidateNullOrEmpty(hm.get(remove));
            hm.set(prefixSum,fnValidateNullOrEmpty(hm.get(prefixSum))+1);
        }
        return count;
}
function fnValidateNullOrEmpty(Value)
{
    if (Value == null || Value == undefined || Value.toString().toUpperCase().trim() == "UNDEFINED" || Value == 'null') {
        Value =0;
    }
    return Value;
}
let myArr = [-59, 76, 3, 69, -26, -54, -79, -88, -72, 43, -23, -95, 66, 44, 12, -11, 81, -17, -97, -91, -70, 32, -17, 53, -9, 21, 35, -77, -80, 97, -80,
    -82, - 2, - 19, - 40, - 87, 40, 69, 51, - 55, 61, - 7, 67, 83, 86, - 59, - 34, - 27, 13, - 66, - 80, 7, 0, 95, 38, 96, - 20, - 7, 93, 75, - 45, - 80, - 20, - 67, - 13,
    57, 96, - 2, 69 ,36, 10, - 13, - 89, - 4 ,- 51, - 26, 32, 47, - 28 ,31, 32, 61, 65, - 45, - 37, 82, 42, 40, - 38 ,78, - 40, - 22 ,4 ,- 33, 10 ,- 69, - 62, - 28 ,- 85 ,- 41
    - 91];
console.log(myArr.length);
console.log(subArrayRangeWithSum(myArr, myArr.length, -91));
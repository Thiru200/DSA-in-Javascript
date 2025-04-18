function linearProbing(hashSize, arr, sizeOfArray)
{
    let hm = new Map();
    let myArr=new Array(hashSize);
    for(let i=0;i<hashSize;i++)
    {
        if(!hm.has(i)){
            hm.set(i,-1)
        }
    }
    for(let i=0;i<sizeOfArray;i++){
        let hashIndex = fnFindHashIndex(hm, arr[i], hashSize);
        if(hashIndex!=-1){
            hm.set(hashIndex,arr[i]);
        }
    }
    for (let i = 0; i < hm.size; i++)
    {
         myArr[i]=hm.get(i);
    }
    return myArr;
}
function fnFindHashIndex(hm, key, hashSize)
{
    let hashIndex = key % hashSize;
    let hashValue = hm.get(hashIndex);  
    let counter = 1;
    while (hashValue != -1) {
        hashIndex = (key + counter) % hashSize;
        hashValue = hm.get(hashIndex);
        counter++;
    }
    if (hm.get(hashIndex) != -1) {
        hashIndex = -1;
    }
    return hashIndex;
}
let hashArr = [944101, 432332, 4730, 779357, 767178, 118088, 453314, 459419, 396271, 213804, 219101, 515641, 633968, 252800, 562126, 935684, 662662, 770828, 801862, 630757, 17307, 796521, 933071];
console.log(linearProbing(19,hashArr,hashArr.length));
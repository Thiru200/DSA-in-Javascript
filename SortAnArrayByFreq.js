function sortByFreq(arr, n){
         n = arr.length;
        let  mapCount = new Map();     
        for (let i = 0; i < n; i++) {
            if (mapCount.has(arr[i])) {
                mapCount.set(arr[i],
                             mapCount.get(arr[i]) + 1);
            }
            else {
                mapCount.set(arr[i],1);               
            }
        }
        arr.sort(function(n1,n2){          
                let freq1 = mapCount.get(n1);
                let freq2 = mapCount.get(n2);
                if (freq1 == freq2) {
                    return n1 - n2;
                }
                else {
                    freq2 - freq1;
                }        
        });
    return arr;
}
console.log(sortByFreq([5,5,4,6,4],5));
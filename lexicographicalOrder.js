function lexicographicalOrder(arr){
    // let output=[];
    // for(let i=0;i<arr.length;i++){
    //     output.push('a');
    // }
    // let count=[];
    // let i;
    // for(let i=0;i<256;i++){
    //     count.push(0);
    // }
    // for(let i=0;i<arr.length;i++){
    //     ++count[arr.charCodeAt[i]];
    // }
    // for(let i=0;i<=255;i++){
    //     count[i]+=count[i-1];
    //     for(i=0;i<arr.length;i++){
    //         let temp=count[arr.charCodeAt[i]];
    //         output[temp-1]=arr.charCodeAt(i);
    //         --count[arr.charCodeAt(i)];
    //     } 
    // }
    // return output.json("");
    //Declaring output character array that will have sorted letters.
    let output = [];
    for(let i = 0; i<arr.length; ++i)
        output.push('a');

    //Creating a count array to store count of individual
    //characters and initializing count array as 0.
    let count = [];
    let i;
    for(let i=0;i<256;i++){
        count.push(0);
    }

    //Storing count of each character.
    for(i = 0; i<arr.length; ++i){
        ++count[arr.charCodeAt(i)];
        
    }
        
    //Modifying the count array such that each element at each index 
    //stores the sum of previous counts. 
    //The modified count array indicates the position of each object in 
    //the output sequence.
    for (i = 1; i <= 255; ++i){
        count[i] = count[i]+count[i-1];
        console.log(count[i]);
    }
    console.log(count);
        
    //Building the output character array.
    for (i = 0; i<arr.length; ++i)
    {
        let temp = count[arr.charCodeAt(i)];
        output[temp-1] = arr.charAt(i);
        --count[arr.charCodeAt(i)];
    }
    
    //returning the sorted string. 
    return output.join("");
}
let lexicographicalOrderArr="ba";
console.log(lexicographicalOrder(lexicographicalOrderArr));
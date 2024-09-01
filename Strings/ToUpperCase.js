function caseConversion(str){
       let upperArr=[];
       for(let i=0;i<str.length;i++){
           let upperChar=str[i].toUpperCase();
           upperArr.push(upperChar);
       }
       str=upperArr.join('');
       return str;
    }

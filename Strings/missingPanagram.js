function missingPanagram(s){
       let alphabets=['a','b','c','d','e','f','g','h','i','j',
       'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
       let strArr=s.toLowerCase().split('');
       let result=[];
       for(let i=0;i<alphabets.length;i++){
           let currIndex=strArr.indexOf(alphabets[i]);
           if(currIndex==-1){
               result.push(alphabets[i])
           }
       }
       return result.join('').length>0?result.join(''):-1;
    }

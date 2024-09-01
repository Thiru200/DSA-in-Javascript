isPanagram(str){
       let alphabets=['a','b','c','d','e','f','g','h','i','j'
       ,'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',
       'z'];
       let strArr=str.toLowerCase().split('');
       if(str.length<26){
           return 0;
       }
       for(let i=0;i<alphabets.length;i++){
           let currIndex=strArr.indexOf(alphabets[i]);
           if(currIndex==-1){
               return 0;
           }
       }
       return 1;
    }

function countVowels(s){
       let vowelsArr=['a','e','i','o','u'];
       let distinctVowels=[];
       let counter=0;
       for(let i=0;i<s.length;i++){
           let vIndex=vowelsArr.indexOf(s[i]);
           if(vIndex!=-1 && distinctVowels.indexOf(s[i])==-1)
           {
               distinctVowels.push(s[i]);
               counter++;
           }
       }
       return counter;
    }

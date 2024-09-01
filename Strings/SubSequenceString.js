#Method1
function IsSubSequenceChar(str1,str2){
  let j=0;
  for(let i=0;i<str1.length&&j<str2.length;j++){
    if(str1[i]==str2[j]){
        j++;
    }
  }
  return(j==str2.length);
}
let result=IsSubSequenceChar("AMMA","AM");
console.log(result);
#Method2
function IsSubSequenceChar(str1,str2,m,n){
  if(n==0){return true;}
  if(m==0){return false;}
  if(str1[m]==str2[n]){
   return IsSubSequenceChar(str1,str2,m-1,n-1);
  }
  else{
   return IsSubSequenceChar(str1,str2,m-1,n);
  }
}
let result=IsSubSequenceChar("AMMA","AAM",4,2);
console.log(result);

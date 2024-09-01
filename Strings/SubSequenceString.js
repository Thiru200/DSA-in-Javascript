#Method1
function IsSubSequenceChar(str1,str2){
   let a='';
        let b='';
    if(A.length==B.length)
    {
      a=A;
      b=B;        
    }
    else
    {
      a=A.length>B.length?A:B;
      b=A.length<B.length?A:B;
    }
    let j=0;
  for(var i=0;i<a.length && j<b.length;i++)
  {
  if(a[i]==b[j]){
    j++;
    }
  }
  return (j===b.length);
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

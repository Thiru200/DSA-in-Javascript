#Method1
function IsAnagram(str1,str2){
  let a=str1.split('').sort().join('');
  let b=str2.split('').sort().join('');
  if(a!=b){
    return false;
  }
  return true;
}
let result=IsAnagram("AMMA","MAMA");
console.log(result);
#Method2
function IsAnagram(str1,str2){
  if(str1.length!=str2.length){
    return false;
  }
  let result=new Array(256).fill(0);
  for(let i=0;i<str1.length;i++){
    result[str1.charCodeAt(i)]++;
    result[str2.charCodeAt(i)]--;
  }
  for(let i=0;i<result.length;i++){
    if(result[i]!=0){
      return false;
    }
  }
  return true;
}
let result=IsAnagram("AMMA","MBAA");
console.log(result);

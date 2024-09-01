function CheckLMRepeatedChar(str){
  let countArr=new Array(256).fill(false);
  let result=-1;
  for(let i=str.length-1;i>=0;i--){
    let ascill=str.charCodeAt(i);
    if(countArr[ascill]){
      result=i;
    }
    countArr[ascill]=true;
  }
  return result;
}
let result=CheckLMRepeatedChar("bbcc");
console.log(result);

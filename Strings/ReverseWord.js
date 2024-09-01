function ReverseWord(str){
  let countArr1=str.split(' ');
  let countArr2=countArr1.reverse();
  return countArr2.join(' ');
}
let result=ReverseWord("Welcome");
console.log(result);

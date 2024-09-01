#Method1
function ReverseWord(str){
  let countArr1=str.split(' ');
  let countArr2=countArr1.reverse();
  return countArr2.join(' ');
}
let result=ReverseWord("Welcome");
console.log(result);
#Method2
function Reverse(str,low,high){
  let arr=str.split('');
  while(low<=high){
    [arr[low],arr[high]]=[arr[high],arr[low]];
    low++;
    high--;
  }
  s=arr.join('');
  return s;
}
function ReverseWord(str){
  let n=str.length;
  let start=0;
  for(let end=0;end<n;end++){
    if(str[end]==" ")
    {
       str=Reverse(str,start,end-1);
       start=end+1;
    }
  }
    str=Reverse(str,start,n-1);
    return Reverse(str,0,n-1);
}
let result=ReverseWord("Welcome To DSA");
console.log(result);

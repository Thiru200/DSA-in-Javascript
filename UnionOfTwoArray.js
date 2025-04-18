function fnUnionOfTwoArr(a1,a2,m1,n1){
let c=[];
for(let i=0;i<m1;i++){
    c[i]=a1[i];
}
for(let i=0;i<n1;i++){
    c[i+m1]=a2[i];
}
c.sort(function(a,b){return a-b});
let union=[];
let k=0;
for(let i=0;i<c.length;i++){
    if(i==0||c[i]!==c[i+1]){
        union[k++]=c[i];
    }
}
return union;
}
let a1=[3,8,10];
let a2=[2,8,9,10,15];
let m1=a1.length;
let n1=a2.length;
console.log(fnUnionOfTwoArr(a1,a2,m1,n1));
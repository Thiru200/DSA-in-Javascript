class Interval{
    constructor(s,e){
        this.s=s;
        this.e=e;
    }
}
function MergeOverlappingInterval(arr,n){
    arr.sort(function(a, b) {return a.s - b.s;});
  
    let res = 0;  
    for (let i=1; i<n; i++)  
    {  
        if (arr[res].e >=  arr[i].s)  
        {   
            arr[res].e = Math.max(arr[res].e, arr[i].e);  
            arr[res].s = Math.min(arr[res].s, arr[i].s);  
        }  
        else { 
            res++; 
            arr[res] = arr[i];  
        }     
    }  
    
    let string = "";
    for (let i = 0; i <= res; i++)  
            string = string + "[" + arr[i].s + ", " + arr[i].e + "] ";
    return string; 
}
let myIntervalArray=[new Interval(5,10), new Interval(3,15), new Interval(18,30), new Interval(2,7)];
let myIntervalSize=myIntervalArray.length;
string=MergeOverlappingInterval(myIntervalArray,myIntervalSize);
console.log(string);
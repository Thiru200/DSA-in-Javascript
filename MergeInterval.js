function fnMergeIntervals(arr){
    arr.sort((a,b)=>(a[0]-b[0]));
     let res=0;
    for(i=1;i<arr.length;i++){
        if(arr[res][i]>=arr[i][0]){
            arr[res][i]=Math.max(arr[res][i],arr[i][1]);
        }
        else{
            res++;
            arr[res]=arr[i];
        }
    }
    for(let i=0;i<=res;i++){
    }
}
fnMergeIntervals([[5,10],[3,15],[18,30],[2,7]]);

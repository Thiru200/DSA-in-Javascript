function fnSortAnArrayWithThree(arr,n){
    let l=0,h=n-1,mid=0;
    while(mid<=h){
        switch(arr[mid]){
            case 0:
                [arr[l], arr[mid]] = [arr[mid], arr[l]];
                l++;mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [arr[h], arr[mid]] = [arr[mid], arr[h]];
                h--;
                break;
        }
    }
    return arr;
}
/* Iteration 1
    low=0;high=8-1=>7;mid=0;
    while(mid<=h){ (0<7)(1<7)
        switch(arr[mid])
        {
            case 0:
                [arr[low],arr[mid]]=[arr[mid],arr[low]]; 1) [arr[0],arr[0]=0,0]; low=1;mid=1; 2) [arr[1],arr[4]=0,1]; low=2;mid=2; [0,0,1,1,1,1,2,2];
                low++;mid++;
                break;
            case 1:
                mid++; mid=2;mid=3;mid=4;
                break;
            case 2: [0,1,1,1,0,1,2,2];
                [arr[high],arr[mid]]=[arr[mid],arr[high]]; [arr[7],arr[mid]]=[2,2]]; [arr[6],arr[mid]]=[2,1]]; high=6;high=5;
                high--;
                break;
        }
    }
 */



let SortArr = [0,1,1,2,0,1,1,2];
let SortArrSize=SortArr.length;
SortArr = fnSortAnArrayWithThree(SortArr,SortArrSize);
console.log(SortArr);
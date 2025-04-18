var arr5=[1,2,3,4,5];
rotateArr(arr5,2,5);
console.log(arr5);
function reverseArray(arr, start, end) 
{ 
    let temp; 

    while (start < end) { 
        //Swapping values at start index and end index.
        temp = arr[start]; 
        arr[start] = arr[end]; 
        arr[end] = temp;
            //Updating the values of start and end.
        start++; 
        end--; 
    } 
}
function rotateArr(arr, d, n)
{
        d%=n;
        //First reversing d elements from starting index.
        reverseArray(arr, 0, d-1);
        reverseArray(arr, d, n - 1);
        reverseArray(arr, 0, n - 1);
        //Then reversing the last n-d elements.
        //this.reverseArray(arr, d, n - 1);
        //Finally, reversing the whole array.
        //this.reverseArray(arr, 0, n - 1); 
}



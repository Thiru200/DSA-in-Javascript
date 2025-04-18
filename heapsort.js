function heapify(arr, n, i) 
{ 
	let largest = i;
	let l = 2*i + 1; 
	let r = 2*i + 2; 
	if (l < n && arr[l] > arr[largest]) 
		largest = l; 

	if (r < n && arr[r] > arr[largest]) 
		largest = r; 

	if (largest != i) 
	{   
		[arr[i], arr[largest]] = [arr[largest], arr[i]]; 
		arr = heapify(arr, n, largest); 
	} 
	return arr;
} 

function buildheap(arr, n){
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
		arr = heapify(arr, n, i);       
	return arr;
}
function heapSort(arr, n) 
{  
	arr = buildheap(arr,n); 
	for (let i=n-1; i>0; i--) 
	{ 
		[arr[0], arr[i]] = [arr[i], arr[0]];
		arr = heapify(arr, i, 0); 
	} 
	return arr;
} 

let heapArray = [10,30,20]; 
let n = heapArray.length; 
arr = heapSort(heapArray, n); 
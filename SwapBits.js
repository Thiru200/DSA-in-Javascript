function SwapBits(n)
{
        let ev=n & 0xAAAAAAAA; 
        //0x55555555 means 01010101010101010101010101010101 in binary.
        //we get all odd bits of n.
    	let od=n & 0x55555555; 
		console.log(`Before even and odd are ${ev} and ${od}`);
    	//right Shifting the odd bits obtained previously.
    	ev>>=1;
    	//left Shifting the odd bits obtained previously.
    	od<<=1;
    	console.log(`After even and odd are ${ev} and ${od}`);
    	//doing bitwise OR of even and odd bits obtained and
    	//returning the final result.
    	return (ev | od);
}
console.log(SwapBits(23));
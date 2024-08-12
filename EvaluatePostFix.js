function fnEvaluatePostFix(S) {
    let arr=[];
    let result="";
    for(let i=0;i<S.length;i++){
        let char=S[i];
        if(isOperand(char)){
            arr.push(char);
        }
        else{
            let a= parseInt(arr.pop());
            let b= parseInt(arr.pop());
            switch (char)
            {
                case "+":
                    console.log(`Param ${a} and ${b} using ("+")`);
                    result = Math.floor(b + a); 
                    console.log(result);
                arr.push(result);
                break;
                case "-":
                    console.log(`Param ${a} and ${b} using ("-")`);
                    result = Math.floor(b - a);
                    console.log(result);
                arr.push(result);
                break;
                case "*":
                    console.log(`Param ${a} and ${b} using ("*")`);
                    result = Math.floor(b * a);
                    console.log(result);
                arr.push(result);
                break;
                case "/":
                    console.log(`Param ${a} and ${b} using ("/")`);
                    result = Math.floor(b / a);
                    console.log(result);
                arr.push(result);
                break;
            }
        }
    }
    console.log("Final ",arr[0]);
    return arr[0];
}
function isOperand(s){
    return (s>="A" && s<="Z") || (s>="a" && s<="z") || (s>=0 && s<=9);
}
console.log(fnEvaluatePostFix("18-6*3-8+88-*"));


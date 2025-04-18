function quadraticRoots(a, b, c,c1,c2)
  {
    let result=new Array();
        let root1=0,root2=0;
        let temp=Math.pow(b,2)-4*a*c;
        console.log("temp "+ temp)
        if(temp<0){
            result.push(-1);
        }
        else{
             
             root1 = Math.floor((-b + Math.sqrt(temp)) / (2 * a));
             root2 = Math.floor((-b - Math.sqrt(temp)) / (2 * a));
             console.log(root2);
             result.push(Math.max(root1,root2));
             result.push(Math.min(root1,root2));
        }
        console.log(result);
  }
  quadraticRoots(1,-2,1);
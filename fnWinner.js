function winner(arr, n){
    let hm=new Map();
    let can='';
    let votes=0;
    let resultArr=[];
    for(let i=0;i<n;i++){
        hm.set(arr[i],fnValidateNullOrEmptyOrZero(hm.get(arr[i]))+1)
    }
    for(let i=0;i<hm.size;i++){ 
        let currentVotes=fnValidateNullOrEmpty(hm.get(arr[i])); 
        var currentCandidate = [...hm].find(([key, value]) => value == currentVotes)[0];                 
        if(currentVotes>votes){
            votes=currentVotes;
            can=currentCandidate;
        }
        else if(currentVotes==votes){
            votes=currentVotes;
            let result=fnLexicalScopeOrderName(fnValidateNullOrEmpty(currentCandidate),fnValidateNullOrEmpty(can));
            switch(result){
            case -1:
                can=currentCandidate;
                break;
            }
        }  
        hm.set(arr[i], -1);
    }
    resultArr.push(can,votes);
    return resultArr;
}
function  fnValidateNullOrEmpty(Value) {
    if (Value == null || Value == undefined || Value.toString().toUpperCase().trim() == "UNDEFINED" || Value == 'null') {
        Value = "";
    }
    return Value;
}
function  fnValidateNullOrEmptyOrZero(Value) {
    if (Value == null || Value == undefined || Value.toString().toUpperCase().trim() == "UNDEFINED" || Value == 'null') {
        Value = 0;
    }
    return Value;
}
function fnLexicalScopeOrderName(str1, str2) {
    return str1.localeCompare(str2);
}
let winnerArr = ['xqdou', 'igxji', 'flkpn'];
console.log(winner(winnerArr, winnerArr.length));
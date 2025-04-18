function SearchByPattern(word, pattern) {
    let patternArr = pattern.split('');
    let hashval = fnGetReferenceVal(patternArr);
    let SearchArr = word.split('');
    let SearchLength = word.length - pattern.length;
    let hm = new Map();
    let counter = pattern.length;
    for (let i = 0; i < SearchArr.length; i++){
        if (counter > SearchArr.length) {
            break;
        }
        let currArr = SearchArr.slice(i, counter);
        console.log(SearchArr,currArr);
        let currVal = fnGetReferenceVal(currArr);
        if (hashval == currVal) {
            hm.set(currArr.join(''), i);
        }
        counter++;
    }
    console.log(hm);
}
function fnGetReferenceVal(key) {
    let count = 0;
    let currIndex = 0;
    for (let i = 0; i < key.length; i++){
        currIndex = vowelsArr.indexOf(key[i]);
        if (currIndex != -1) {
            count = count + currIndex + 1;
        }
    }
    return count;
}
var vowelsArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let word = 'abcbaabca';
let pattern = 'abc';
SearchByPattern(word,pattern);

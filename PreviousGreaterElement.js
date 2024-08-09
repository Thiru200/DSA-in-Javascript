let DummyArr = [8, 10, 12];
function fnFindPreviousElement() {
    let stack = [];
    for (let i = 0; i < DummyArr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= DummyArr[i]) {
            stack.pop();
        }
        let span = stack.length == 0 ? -1 : stack[stack.length - 1];
        console.log(span);
        stack.push(DummyArr[i]);
    }
}
function fnFindNextGreaterElement() {
    let result = [];
    let stack = [];
    for (let i = DummyArr.length - 1; i >= 0; i--){
        while (stack.length > 0 && stack[stack.length - 1] <= DummyArr[i]) {
            stack.pop();
        }
        let span = stack.length == 0 ? -1 : stack[stack.length - 1];
        result.push(span);
        stack.push(DummyArr[i]);
    }
    for (let i = result.length - 1; i >= 0; i--){
        console.log(result[i]);
    }
}
fnFindPreviousElement();
fnFindNextGreaterElement();
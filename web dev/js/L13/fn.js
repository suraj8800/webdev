console.log("Line number 1", varName);
var varName = 10;
console.log("Line number 3",varName);
function b(){
    console.log("Line number 5",varName);
}
function fn(){
    console.log("Line number 8",varName);
    var varName = 20;
    b();
    console.log("line no 11",varName);
}
fn();
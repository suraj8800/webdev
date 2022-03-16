console.log("varName", varName);
var varName;
function b(){
    console.log("line no 4", varName);
}
console.log("Line no 6", varName);

function fn(){
    console.log("Line no 9", varName);
    varName = 20;
    b();
    console.log("Line no 12", varName);
}
fn();
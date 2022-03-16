// function real(){
//     console.log("I am real. Always ren me");
// }

// function real(){
//     console.log("No, I am real one");
// }

// function real(){
//     console.log("you both are wasted");
// }
// real();

// jab same name ka function hoga to jo sabse last wala function hai wo run hoga

console.log("varName",varName);
var varName;
console.log("varName",varName);
varName = "caption";
console.log("varName",varName);
fn();
function fn(){
    console.log("hello from fn")
}
fn();

fnContainer();
var fnContainer = function () {
    console.log("I am expression");
}
fnContainer();

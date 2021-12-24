// q1
function f(){
    console.log(arguments);
}

function f(a, b){
    return a+b;
}

console.log(f(2, 3, 4, 5));

function f(x, y, z, t){
    return x+y+z+t;
}
console.log(f(2, 3, 4, 5));

// Global execution context
console.log("before declaration",a); // undefined
var a ;
console.log("after declaration",a); // undefine
a = 10 ;
console.log("after initialitation",a); // 10

function fn(){
    console.log("before declaration",a); // undefined
var a ;
console.log("after declaration",a); // undefine
a = 10 ;
console.log("after initialitation",a);
}
fn();

// G.E.C question 1
function fn1(){
    console.log("before declaration",a); // undefined
var a ;
console.log("after declaration",a); // undefine
a = 20 ;
if(true){
    var a =30;
    console.log('35', a);
}
console.log("after initialitation",a);
}
fn1();

// type of function
// function statement
// define
function sayHello(){
    console.log("hello");
}
sayHello();

// parameterized function in js
function paramFunc(param){
    console.log("Parameter Fuction", param);
}
paramFunc(); // o/p:- parameter function undefined
paramFunc(10); // o/p:- parameter function 10
console.log("`````````````````````````");
paramFunc("hello"); // o/p:- parameter function hello

console.log("`````````````````````````");
paramFunc([10, 20, 30, 40, 50]); // o/p:- parameter function [10, 20, 30, 40 ,50]

console.log("`````````````````````````");
paramFunc({name: 'suraj'}); // o/p:- parameter function {name : 'suraj'}

// return function in js

function returnFun(par){
    console.log("return function", par); // op:- return function hello
    return "this is return value";
}
let rval = returnFun('hello');
console.log("ravl", rval); // op:- rval this is return value

// function are first class citizen
// funciton are treated as variable
// assignment
let a = [10, 20, 30, 40];
let b = a;
console.log(b); // op:- [10, 20, 30, 40]

// function expression
let fnContainer = function (){
    console.log("I am expression");
    console.log("I am also a anonaymous function");
}
fnContainer();

// IIFE;- immediately invoked function expression
(function fn(){
    console.log("I am IIFE");
    console.log("I will run on my own");
})();

// Arrow function
let fn = num => num * num;
console.log(fn(5));

// first class citizen
// functin are treated as a variable
// 1. assignment -> fn expression
// 2. variable can be passed as a parameter

function sayHi(param){
    console.log("hello", param);
    param();
    return "styjagdad";
}

function smaller(){
    console.log("hello i am smaller");
}

let returnVal = sayHi(smaller);
console.log(returnVal);

//clouser

function outer(){
    console.log("I am outer returning inner");
    return function inner(){
        console.log("i am inner");
    }
}

let outerRVal = outer();
console.log("Rval", outerRVal);

outerRVal();


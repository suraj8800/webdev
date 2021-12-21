function f(x){
    return x*x;
}

function g(x){
    return x + 10;
}

function h(x){
    return x =10;
}

let farr = [f, g, h];
let x = 10;

let cv = farr.reverse().reduce(function(pv, cv,){
    return cv(pv);
}, x)
console.log(cv);

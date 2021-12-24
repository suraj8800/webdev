// function outer(){
//     console.log(" hello world");
//     return function inner(){
//         console.log("i am inner");
//     }
// }

// let rval = outer();
// console.log(rval);
// rval();

// clouser
function outer(first){
    console.log(" hello world");
    return function inner(second){
        console.log("i am inner");
        return first * second;
nbhs
    }
}

let rval = outer(2);
console.log(" before calling");
let ans = rval(4);
console.log(ans);

// question1
function oouter(){
    var arr = [];
    for(var i=0; i<3; i++){
        arr.push(function(){
            console.log(i);
        })
    }
    return arr;
}

console.log("before calling");
var arr = oouter();
arr[0]();
arr[1]();
arr[2]();
console.log("after calling");
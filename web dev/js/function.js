// not-primitive -> array, object, function
function sayHi(param){
    // console.log('hello from sayHi');
    // console.log('param recived', param);

    // Random-> gives the random value it can be boolean, number, string. 
    let rval = Math.random() > 0.5? true: "less than 0.5"; 
    return rval;
}
// sayHi(10);
// sayHi('hello');

let rval = sayHi([10, 20, 30, 40]);
console.log('rval', rval);
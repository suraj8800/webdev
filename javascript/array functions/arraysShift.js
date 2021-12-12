// shift remove the value at first.
// shift returns the remove value.

let arr = [10, 30, 40, 80, 100];
displayArray(arr);


let rv = arr.shift();
displayArray(arr);
console.log(rv);


function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
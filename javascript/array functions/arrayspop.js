// pop remove 1 value from the end.
// pop return removed value

let arr = [20, 30, 50, 80, 100];
displayArray(arr);

let rv = arr.pop();
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
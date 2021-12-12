// unshit append one or more value at first.
// unshift return the new length of the array

let arr = [10, 20, 80, 100, 50];
disaplayArray(arr);

arr.unshift(1000);
disaplayArray(arr);

arr.unshift(2000, 3000, 4000);
disaplayArray(arr);

let rv = arr.unshift(5000, 6000);
disaplayArray(arr);
console.log(rv);

function disaplayArray(arr){
    console.log(arr + " = " + arr.length);
}
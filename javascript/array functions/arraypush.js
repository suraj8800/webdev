// push append one or more value at the end
// push return the new length of array
let arr = [10, 20, 80, 100, 50];
disaplayArray(arr);

arr.push(1000);
disaplayArray(arr);

arr.push(2000, 3000, 4000);
disaplayArray(arr);

let rv = arr.push(5000, 6000);
disaplayArray(arr);
console.log(rv);

function disaplayArray(arr){
    console.log(arr + " = " + arr.length);
}
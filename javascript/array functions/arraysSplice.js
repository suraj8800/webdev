// splice return the removed value.
let arr = [ 10, 20, 30, 40, 50];
let na = arr.splice(2, 2, 300, 400, 500);

displayArray(arr); // o/p:= 10, 20, 300, 400, 500, 50
displayArray(na); // o/p:= 30, 40 (removed value)

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
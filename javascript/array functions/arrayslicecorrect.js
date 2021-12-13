let arr = [10, 20, 30, 40 ,50 ,60];
let na = arr.slice() // slicing is fine for int because integer are value type

displayArray(arr);
displayArray(na);
na[3] = 450;
displayArray(arr);
displayArray(na);
function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
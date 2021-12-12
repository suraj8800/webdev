let arr = [10, 20, 30, 50, 100];
displayArray(arr);

arr[10] = 500;// no array out of index exception, increasing the array.
displayArray(arr);

arr["kuchbhi"] = 1000;// because every array can be like an object also.
displayArray(arr);
console.log(arr["kuchbhi"]);

 function displayArray(arr){
     console.log(arr + " = " + arr.length);
 }
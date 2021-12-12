let arr = [20, 12, 19, 23, 27, 15, 40, 50, 21, 80];
let odd = [];
let even = [];

displayArray(arr);

let i = 0;
while(arr.length > 0){
    let val = arr.shift();
    if(val % 2 == 0){
        even.push(val);
    }else{
        odd.push(val);
    }
}
arr = even.concat(odd);
displayArray(arr);
displayArray(odd);
displayArray(even);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
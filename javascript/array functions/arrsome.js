// some function is a callback function
// some() retrun either a singel true or a single false
// return false only if all cb return false

let arr= [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
];

// is there a valid candidate( f and between 20 nd 30)
let isValid = arr.some(function(v, i, oarr){
    if(v.gender == 'F' && v.age>= 20 && v.age <= 30){
        return true;
    } else{
        return false;
    }
});
console.log(isValid);
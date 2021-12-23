let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
];

// sum of square ages of all valid candidate
let sum = arr.filter(v => v.gender == 'F' && v.age >= 20 && v.age <= 30);
let res1 = sum.map(v=> v.age * v.age);
let sum1 = res1.reduce(function(pv, cv, ci, oarr){
    return pv + cv;
});
console.log(sum1);
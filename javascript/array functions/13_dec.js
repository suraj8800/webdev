// mapvs filter
let arr = [11, 16, 18, 17, 23, 42, 11, 39];

let mres = arr.map(v => v % 2 == 1);
let fres = arr.filter(v => v % 2 == 1);

console.log(mres);
console.log(fres);

// question1
let products = [
    {name: "T-shirt", price: 25},
    {name: "Headphone", price: 125},
    {name: "keyboard", price: 75},
    {name: "Moniter", price: 200},
];
//return name of all products in uppercase who has price >= 100
let ucfprds = products.filter(p => p.price >= 100 ).map(p => p.name.toUpperCase());
console.log(ucfprds);

/*let ans= products.filter(function(v){
    if(v.price >= 100){
        return true;
    }else{
        return false;
    }
}).map((v) => v.name.toUpperCase());
console.log(ans);*/

//return name of all products in lowercase who has price < 100
let lcfprds = products.filter(p => p.price < 100).map(p => p.name.toLowerCase());
console.log(lcfprds);

// question 3
let arr1 = [5, 83, 24, 67, 71, 12, 24, 7];

// return cubes of values whose square <= 1000
let cube = arr1.filter(v => v * v <= 1000).map(v => v*v*v);
console.log(cube);

//return cubes of values whose cube are <= 10000
let cube1 = arr1.map(v1 => v1*v1*v1).filter(v1 => v1 <=10000);
console.log(cube1);

let cube3 = arr1.map(v2 => v2*v2).filter(v2 => v2 <=1000).map(v2 => v2*v2*v2);
console.log(cube3);


// NOTE:= phle filter kro fir map krna chahiye
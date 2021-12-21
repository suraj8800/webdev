let a1 = [10, 30, 40, 50, 70, 90, 60];
let a2 = [63, 34, 50, 90, 80,10, 60];
console.log(a2.includes(80)); // true
console.log(a2.includes(88)); // false

let intern1 = a1.filter(v => a2.includes(v)); // 10, 50, 90, 60
console.log(intern1);

let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // 50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60], // 90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60], // 100, 60
    [10, 50, 70, 80, 90, 100, 30, 60], // 100
];

let intern2 = arr2d.reduce(function(pv, cv, ci, oarr){
    console.log(pv + "####" + cv);
    let inter = pv.filter(v => cv.includes(v));
    return inter;
});
console.log(intern2);
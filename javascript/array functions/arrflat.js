let arr2d = [10, 20,[50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];
let res1 = arr2d.flat(0);
console.log(res1);

let res2 = arr2d.flat(1);
console.log(res2);

let res3 = arr2d.flat(2);
console.log(res3);

let res4 = arr2d.flat(3);
console.log(res4);

let res5 = arr2d.flat(Infinity);
console.log(res5);
let arr1 = [10, 50, 70, 80, 90, 100, 30, 60];
let arr2 = [11, 50, 75, 85, 90, 100, 34, 60];
let a2ma1 = arr2.filter(v=> arr1.includes(v) == false);
console.log(a2ma1);
let union = arr1.concat(a2ma1);
console.log(union);
// question1 (HW) Arrayintersection
let a1 = [10, 50, 70, 90];
let a2 = [63, 34, 50, 90, 80,10, 60];

let intern1 = a1.filter(v => a2.includes(v));
console.log(intern1);

let arr2dintern = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],
    [10, 51, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 92, 100, 34, 60],
    [10, 50, 70, 80, 90, 100, 30, 61],
];

let intern2 = arr2dintern.reduce((pv, cv) =>  {
    let intern = pv.filter(v=> cv.includes(v))
    return intern;
});

console.log(intern2);



// question 2(HW) ArrayUNION

let arr2dunion = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 97],
    [10, 51, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 92, 100, 34, 60],
    [10, 50, 70, 80, 90, 100, 30, 61],
];

let union = arr2dunion.reduce((pv, cv)=> pv.concat(cv.filter(v=> !pv.includes(v))));
console.log(union);

// question sort and reverse
let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];

//sort
sarr.sort();
console.log(sarr);

sarr.reverse();
console.log(sarr);

narr.sort();
console.log(narr);

narr.reverse();
console.log(narr);

// reverse
narr.sort((a, b) => a - b);
console.log(narr);

narr.reverse();
console.log(narr);

// sort and reverse

// question
let str = "My name is Sumeet Malik. I am a software developer. I believe in  learning by doing. I need courage and patience.";
let res = "";

console.log(res);

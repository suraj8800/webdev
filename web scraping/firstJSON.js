// npm install minimist
// node firstJSON.js

let minimist = require("minimist");
let args = minimist(process.argv);

//JSON = javascript object notation
// JSON means saving data datain the same format as of javascript object

let s1 = {
    name : "Suraj",
    age : 22
};
//s1 is an object. name and age are properties

console.log(s1.name);
console.log(s1.age);

let arrofname = ["suraj", "govind", "vivek"];
console.log(arrofname[0]);
console.log(arrofname[1]);
console.log(arrofname[2]);

let arr0fobject = [
    {
        name : "suraj",
        age : 22
    },
    {
        name: "govind",
        age: 23
    },
    {
        name: "vivek",
        age: 25
    }
];

console.log(arr0fobject[0].name);
console.log(arr0fobject[0].age);

console.log(arr0fobject[1].name);
console.log(arr0fobject[1].age);

console.log(arr0fobject[2].name);
console.log(arr0fobject[2].age);
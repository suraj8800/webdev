//2015 es6
//hoisting
console.log("line number 2", varName);

// declare
var varName;

//assign
varName = 10;
console.log("line no 10", varName);
// reassign
varName = 20;
console.log("line no 13", varName);

var varName;
console.log("line no 16", varName);
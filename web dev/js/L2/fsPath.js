let fs = require("fs");
let path = require("path");
//read
let buffer = fs.readFileSync("abc.js");


// for(let i =1; i<=10; i++){
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake, "read.md"),`# read me for ${dirPathToMake}`);
// }

let ext = path.extname(path.join(__dirname, "abc.js"));
console.log("ext ", ext);

let name = path.basename(__dirname);
console.log(name);

name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);
//type in terminal:- 'npm install minimist'
//to run the code type:- 'node CreateBigFile.js --dest=big.data'
let minimist = require("minimist"); //minimist is external modlue.
let fs = require("fs"); //fs is FileSystem which is a library of node.

let args = minimist(process.argv);

let arr = [];
for(let i =0 ; i< 50000000; i++){
    arr.push(i); 
}
let str = arr.join("\n")

fs.writeFileSync(args.dest, str, 'utf-8');
fs.appendFileSync(args.dest, str, 'utf-8');
fs.appendFileSync(args.dest, str, 'utf-8');
fs.appendFileSync(args.dest, str, 'utf-8');
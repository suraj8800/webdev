// filesystem -> creat, read update, delete

let fs = require("fs");

//read
let buffer = fs.readFileSync("abc.js");

// console.log("Bin data ", buffer);

// console.log("bin data "+buffer);

// create
// fs.openSync("abc.txt", "w");

// write
// fs.writeFileSync("abc.txt","openSync is use for create a file");

//update
// fs.appendFileSync("abc.txt", "appendfileSync update the file");

// create directory
// fs.mkdirSync("myfolder");
// fs.writeFileSync("myfolder/myfile.txt", "my content");

//delete
// let content = fs.readdirSync("myfolder");
// console.log(content);
// for(let i =0; i<content.length; i++){
//     console.log("file ", content[i], "is removed");
//     // unlinkSync remove file
//     fs.unlinkSync("myfolder/"+content[i]);
// }

// // remove folder
// fs.rmdirSync("myfolder");

//fs.existsSync -> if file exists a path -> true/ false;
let doesPathExist = fs.existsSync("abc.txt");
console.log(doesPathExist);

doesPathExist = fs.existsSync("abcd.txt");
console.log(doesPathExist);

// fs.lstatSync
// let detailObj = fs.lstatSync("fileSys.js");
// let ans = detailObj.isFile();
// console.log(ans);

// detailObj = fs.lstatSync("fileSys.js");
// ans = detailObj.isDirectory();
// console.log(ans);

for(let i =1; i<=10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake +"//"+"read.md",` #read me for ${dirPathToMake}`);
}
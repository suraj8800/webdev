#!/bin/bash
let fs = require("fs");
// const { isPromise } = require("util/types");
// input
let inputArr = process.argv.slice(2);
// console.log(inputArr);

//option
let optionArr = [];
let filesArr = [];

for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == '-'){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}

//check option

let isBothPresent = optionArr.includes("-b") && optionArr.includes("-n");
if (isBothPresent==true) {
    console.log("either enter -n or -b option");
    return;
}

// existance
for(let i =0;i<filesArr.length; i++){
    //buffer
    let isPresent = fs.existsSync(filesArr[i]);
    if(isPresent == false){
        console.log(`file ${filesArr[i]} is not present`);
        return;
    }
}

// read
let content = "";
for(let i =0; i<filesArr.length; i++){
    //buffer
    let bufferContent = fs.readFileSync(filesArr[i]);
    content += bufferContent + "\n";
}
// console.log(content);
let contentArr = content.split("\n");
// console.log(contentArr);

//-s
 let isSpresent = optionArr.includes("-s");
 if(isSpresent == true){
     for(let i = 1; i < contentArr.length; i++){
         if(contentArr[i] == "" && contentArr[i-1] == ""){
             contentArr[i]=null;
         }else if(contentArr[i] == "" && contentArr[i-1] == null){
             contentArr[i] = null;
         }
     }
     let tempArr = [];
     for(let i=0; i<contentArr.length; i++){
         if(contentArr[i] != null){
             tempArr.push(contentArr[i]);
         }
     }
     contentArr = tempArr;
 }
 console.log("---------------------");
//  console.log(contentArr.join("\n"));

 // -n

 let isNpresent = optionArr.includes("-n");
 if(isNpresent == true){
    for(let i =0; i<contentArr.length; i++){
        contentArr[i] = `${i + 1} ${contentArr[i]} `;
    }
 }
 
 //-b
 let isBPresent = optionArr.includes("-b");
 if (isBPresent == true) {
 
     let counter = 1
     for (let i = 0; i < contentArr.length; i++) {
         if (contentArr[i] != "") {
             // contentArr[i] = `${i + 1} ${contentArr[i]} `;
             contentArr[i] = `${counter} ${contentArr[i]}`;
             counter++;
         }
     }
 }
console.log(contentArr.join("\n"));

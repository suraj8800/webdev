#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { dir } = require('console');
let fs = require('fs');
let path = require('path');
let helpObj = require("./command/help");
// let treeObj = require("./command/tree");
//let organizeObj = require("./command/organize");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'ios', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}

let command = inputArr[0];
switch(command){
    case "tree":
        treefn(inputArr[1]);
        break;
    case "organize":
        organizefn(inputArr[1]);
        break;
    case "help":
        helpObj.helpkey();
        break;
    default:
        console.log("please input right command");
        break;
}

function treefn(dirPath){
    // let destPath;
    if(dirPath == undefined){
        treeHelper(process.cwd(), "");
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath);
        }else{
            console.log("Kindly enter the path");
            return;
        }
    }
}

function treeHelper(dirPath){
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├─" + fileName);
    }else{
        let dirName = path.basename(dirPath);
        console.log(indent + "└─" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i =0; i<childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}


function organizefn(dirPath){
    // console.log("Organize command implmented for", dirPath);
    // 1. input -> directory path given
    let destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            destPath = path.join(dirPath, "organized_file");

            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }
            // 2. create -> organized_files -> create
        }else{
            console.log("Kindly enter the path");
            return;
        }
    }
    organizeHelper(dirPath,destPath);

}

function organizeHelper(src, dest){
    // 3. identifying catagories of all files present in that input directory -> 
    let childNames = fs.readdirSync(src);
    // console.log(childName);
    for(let i = 0; i<childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            let catagory = getCatagory(childNames[i]);
            console.log(childNames[i], "belong to -->", catagory);
            // 4. copy/ cut files to that organized directory inside of any of category folder

            sendFiles(childAddress, dest, catagory);
        }
    }
}

function sendFiles(srcFilePath, dest, catagory){
    //
    let catagoryPath = path.join(dest, catagory);
    if(fs.existsSync(catagoryPath) == false){
        fs.mkdirSync(catagoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catagoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", catagory);
}

function getCatagory(name){
    let ext = path.extname(name);
    ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for(let i =0; i<cTypeArray.length; i++){
            if(ext==cTypeArray[i]){
                return type;
            }
        }
    }
    return "other";
}



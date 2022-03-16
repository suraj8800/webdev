let inputArr = process.argv.slice(2);
let fs = require('fs');
let path = require('path');

 let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'ios', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}

let command = inputArr[0];
switch(command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn(inputArr[1]);
        break;
    default:
        console.log("please input right command");
        break;
}

function treeFn(dirPath){
    console.log("Tree command implemented for", dirPath);
}

 function organizeFn(dirPath){
     let destPath;
     if(dirPath==undefined){
         console.log("Kindly enter the Path");
     }
     else{
         let doesExit = fs.existsSync(dirPath);
         if(doesExit){
              destPath = path.join(dirPath, "Organized_files");
         
         if(fs.existsSync(destPath==false)){
             fs.mkdirSync(destPath);
         }
        }
        else{
            console.log("Kindly enter the Path");
            return;
        }
     }
     
 }

 function helpFn(dirPath){
     console.log();
 }
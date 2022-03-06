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
    fs.unlinkSync(srcFilePath);
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
module.exports={
    organizeKey: organizefn
}
let inputArr = process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];
switch(command){
    case "tree":
        treefn(inputArr[1]);
        break;
    case "organize":
        organizefn(inputArr[1]);
        break;
    case "help":
        helpfn();
        break;
    default:
        console.log("please input right command");
        break;
}

function treefn(dirPath){
    console.log("Tree command implmented for", dirPath);
}

function organizefn(dirPath){
    console.log("Organize command implmented for", dirPath);
}

function helpfn(){
    console.log(`
    List of All commands:
                    node main.js tree "dirPath"
                    node main.js organize "dirPath"
                    node main.js help 
    `);
}
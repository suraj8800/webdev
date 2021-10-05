// npm install minimist
// node firstcreatefolder.js --source=teams.json --dest=root

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");// to make folder paths, never append slashes yourself
// use path.join

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);
fs.mkdirSync(args.dest);
for(let i = 0; i<teams.length; i++){
    let foldername = path.join(args.dest, teams[i].name);
    fs.mkdirSync(foldername);
}

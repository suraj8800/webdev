// npm install axios
// npm install minimist
// To run node downloadfromweb.js --dest="download.html" --url="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results"

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");

let args = minimist(process.argv);

let downloadpromise = axios.get(args.url);
downloadpromise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest, html, "utf-8");
}).catch(function(err){
    console.log(err);
})
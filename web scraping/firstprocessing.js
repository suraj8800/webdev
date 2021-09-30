// npm install minimist
// npm install jsdom
// node firstprocessing.js --source="download.html"

let minimist = require("minimist");
let jsdom = require("jsdom");

let fs = require("fs");

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, data){
    let dom = new jsdom.JSDOM(data);
    let document = dom.window.document;
    let descs = document.querySelectorAll("div.match-info > div.description");
    // we will get all div's with class description whose parent class is a div with class match-info.
    for(let i=0; i<descs.length; i++){
        console.log(descs[i].textContent);
    }
})
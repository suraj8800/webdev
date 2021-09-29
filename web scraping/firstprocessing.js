// npm install minimist
// npm install jsdom
// node firstprocessing.js --source="download.html"

let minimist = require("minimist");
let jsdom = require("jsdom");

let fs = require("fs");

let args = minimist(process.argv);

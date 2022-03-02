let cp = require("child_process");
// console.log("Trying to open calculator");
// cp.execSync("calculator");
// console.log("opened calculator");
// cp.execSync("open Chrome https:\\www.google.com");
let output = cp.execSync("node abc.js");
console.log("output "+output);

let minimist = require('minimist');
let args = minimist(process.argv);

let fs = require('fs');

//args.source(f1.txt)
let stext = fs.readFileSync(args.source, "utf-8");
console.log(stext);

let words = stext.split(" "); // conversion of textfile in array
//console.log(words);
for(let i =0; i< words.length; i++){
    words[i] = words[i].toUpperCase();
}

let dtext = words.join(" ");
console.log(dtext);

//args.dest(f2.txt)
fs.writeFileSync(args.dest, dtext, "utf-8");

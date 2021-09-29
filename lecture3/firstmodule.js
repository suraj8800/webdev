let parse = require('minimist');
let args = parse(process.argv);
let name = args.name;
let age = args.age;

if(age>30){
    console.log("Hello "+ name + ". you must go home.");
} else{
    console.log("heya "+name+". where is the party to night.");
}
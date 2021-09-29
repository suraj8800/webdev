// task1 = read file (disk)
//task2 = calculate prime (cpu)
// task 2 done in parallel with task1

function Isprime(x){
    let isprime = true;
    for(let div=2; div<=x; div++){
        if(x % div == 0){
            isprime = false;
            break;
        }
    }
    return isprime;
}

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

//task1 begins
let t1 = Date.now();
console.log("Starting task1 at "+ t1 % 100000);

//let data = fs.readFileSync(args.source)
fs.readFile(args.source, function(data){
    let t2 = Date.now();
    console.log("finish task1 at "+ t2 % 100000);
    console.log(t2 - t1);
})
//task1 ended

//task2 
let t3 = Date.now();
console.log("Starting task2 at" + t3 % 100000);

//task2 -> prime
let arr = [];
for(let i =2; i<args.n; i++){
    let isprime = Isprime(i);
    if(isprime == true){
        arr.push(i);
    }
}

let t4 = Date.now();
console.log("Finishing task2 at "+ t4 % 100000);
console.log(t4-t3);
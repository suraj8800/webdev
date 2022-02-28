let number = process.argv;
let n = parseInt(number[2]);

let a = 0;
let b = 1;
let c;

for(let i = 1; i<= n; i++){
    c = a + b;
    console.log(a);
    a = b;
    b = c;
}

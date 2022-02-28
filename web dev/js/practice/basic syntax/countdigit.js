let number = process.argv;
let n = parseInt(number[2]);
let digit = 0;
// console.log("enter a number", n);

while(n > 1){
    n = n /10;
    digit++;
}
console.log(digit);
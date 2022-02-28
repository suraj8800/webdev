let number = process.argv;
let n = parseInt(number[2]);
let k = parseInt(number[3]);
let count=0;
let temp = n;

while(temp >= 1){
    temp = temp / 10;
    count++;
}
k = k%count;
if(k < 0){
    k = k + count;
}

let div = 1;
let multi = 1;
for(let i =1; i<=count; i++){
    if( i<= k){
        div = div * 10;
    } else {
        multi = multi * 10;
    }
}

let q = n/div;
let r = n % div;
let ans = (r * multi) + q;
console.log(ans);
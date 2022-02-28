let n = process.argv;
let num = parseInt(n[2]);

for(let i =1; i<=num; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str = str + "*\t";
    }
    console.log(str);
    
}
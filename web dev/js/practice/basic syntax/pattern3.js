let num = process.argv;
let n = parseInt(num[2]);
let nsp = n-1;
let nst = 1;


for(let i =1; i<=n; i++){
    let str = "";
    for(let j=1; j<=nsp; j++){
        str += "\t";
    }
    for(let j=1; j<=nst; j++){
        str += "*\t";
    }
    nsp--
    nst++
    console.log(str);
}

let num = process.argv;
let n = parseInt(num[2]);
let nsp = n/2;
let nst = 1;

for(let i = 1; i<=n; i++){
    let str = "";
    for(let j =1; j<=nsp; j++){
        str += "\t";
    }
    for(let j =1; j<= nst; j++){
        str += "*\t";
    }

    if(i < n/2){
        nsp -= 1;
        nst += 2; 
    }else{
        nsp += 1;
        nst -= 2;
    }
    console.log(str);
}
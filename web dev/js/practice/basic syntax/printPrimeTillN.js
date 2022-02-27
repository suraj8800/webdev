let number = process.argv;
let low = parseInt.prompt(number[2]);
let high = parseInt.prompt(number[3]);
console.log('enter low number' ${low} and 'enter high number' ${high});
for(let i = low; i<= high; i++){
    let flag = true;
    let div = 2;
    while(div * div <= i){
        let rem = i % div;

        if(rem == 0){
            flag = false;
            break;
        }
        div++;
    }

    if(flag == true){
        console.log(i);
    }
}

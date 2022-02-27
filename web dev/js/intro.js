//print
console.log("hello");

//declare var
let a;
a = 10;
a = 10.1;
a = 'i am a string';
a = null;
a = true;
console.log('variable contains',a);

// JS -> java
let number = 10;
for(let i = 1; i<=number; i++){
    console.log('number is :', i);
}

// is prime
 number = 25;
let flag = true;
for(let div = 2; div < number; div++){
    if(number % div == 0){
        flag = false;
        break;
    }
}

if(flag == true){
    console.log(number, 'is prime');
}else{
    console.log(number, 'not prime');
}
/*Q1.  Print Fizz Buzz.
Description: Write a program that prints the numbers from
1 to 20 and for multiples of 
'3' print "Fizz"  
'5' print "Buzz"
'3' and '5' both print "FizzBuzz"
else number itself*/

let number = 20;
for(let i = 1; i<=number; i++){
    if(i % 3 == 0){
        console.log('Fizz');
    } else if(i % 5 == 0){
        console.log('Buzz');
    }else if(i % 15 == 0){
        console.log('fizzbuzz')
    }else{
        console.log(i);
    }
}

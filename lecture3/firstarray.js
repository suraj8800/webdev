let clargs = process.argv;
let n = parseInt(clargs[2]);
let arr = [];       // array creation

for(let i =0; i < n; i++){
    let val = parseInt(clargs[i+3]); 
    // val variable is created and it will get the input from 3rd place  
    arr.push(val);
   
  // pushing the value val in the array
}

for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
    console.log(arr.length)
}
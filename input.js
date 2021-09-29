let args = process.argv;
console.log(args);

let n = args[2];
// by default JS coming with string;
console.log(typeof n);
n = n + 30;
console.log(n);

// use parseInt() to convert the  Type of string to number ;
n = parseInt(args[2], 10) //10 is the base of the number
console.log(n);
n = n + 30;

//now the type of data is number;
console.log(typeof n);
console.log(n);
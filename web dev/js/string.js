let singleQuotes = '    How are you   ';
let doubleQuotes = "double quotes ki string";

console.log(singleQuotes);
console.log(doubleQuotes);

let char = singleQuotes.charAt(6);
console.log(char);

let subStr = singleQuotes.substring(2, 8);
console.log(subStr);

let ascii = singleQuotes.charCodeAt(6);
console.log(ascii);

singleQuotes = singleQuotes.trim();

// split
let arrStr = singleQuotes.split(" ");
console.log(arrStr);

let str = arrStr.join("+");
console.log(str);
let array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(array.length);
let i = 0;
while(i < array.length){
    console.log('element at idx ', i, ' is ', array[i]);
    i++;
}

//push unshift
console.log('********** PUSH ->add value at last ***********');
array.push('last value');
console.log(array);

console.log('********** POP ->remove value at last ***********');
array.pop();
console.log(array);


console.log('********** UNSHIFT ->add value at first ***********');
array.unshift('first value');
console.log(array);

array.shift();
console.log('********** SHIFT ->remove value at first ***********');
console.log(array);

console.log('----------------------');
console.log(array);

//start idx, end index
let partOfArray = array.slice(2);
console.log(partOfArray);
console.log(array);

//splice update version of remove, it change the actual value.
array.splice(2, 1);
console.log(array);

//Index of, // contain
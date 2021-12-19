// map is function it self 
// map return new array equal in length to original array
// map takes a input a callback function
// map will call the callback function multiple times (once for each)
// for each run of callback, map will pass v, i and original array
let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i, oarr){
    return v*v;
})
console.log(sqarr);
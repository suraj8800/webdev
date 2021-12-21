let arr = [10, 20, 30, 40, 50];
let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv+ "-" + cv + "-" + ci);
    return pv+cv;
});
console.log(sum1);
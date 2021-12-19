// filter is function it self
// filter take as input a callback function
let arr = [2, 50, 90, 8, 150, 110, 6];
let oarr = arr.filter(function(v, i, oarr){
    console.log(v +"@" + i + " [" + oarr + "]");
    if(v%2==1){
        return true;
    } else{
        return false;
    }
});
console.log(oarr);

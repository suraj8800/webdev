Array.prototype.mymap = function(callback){
    let res= [];
     for(let i=0; i<this.length; i++){
        let val = this[i];
        let rv = callback(val ,i, this);
        res.push(rv);
     }
     return res;
}


let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr1 = arr.mymap(function(v, i, oarr){
    return v*v;
})
console.log(sqarr1);

let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i, oarr){
    return v*v;
})
console.log(sqarr);
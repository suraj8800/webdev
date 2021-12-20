Array.prototype.myevery = function(cb){
    let oarr = this;
    for(let i=0; i<oarr.length; i++){
        let v = oarr[i];
        let rv = cb(v, i, oarr);
        if(rv == false){
            return false;
        }
    }
}

let arr= [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
];

// is there a valid candidate( f and between 20 nd 30)
let isValid = arr.myevery(function(v, i, oarr){
    if(v.gender == 'F' && v.age>= 20 && v.age <= 30){
        return true;
    } else{
        return false;
    }
});
console.log(isValid);
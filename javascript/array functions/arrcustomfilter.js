Array.prototype.myfilter = function(cb){
    let oarr = this;
    let res = [];
    for(let i =0; i<oarr.length; i++){
        let v = oarr[i];
        let rv = cb(v, i, oarr);
        if(rv == true){
            res.push(v);
        }
    }
    return res;
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

let ladies = arr.myfilter((v, i, oarr) => v.gender == 'F').map((v, i, oarr)=> v.age);
console.log(ladies);
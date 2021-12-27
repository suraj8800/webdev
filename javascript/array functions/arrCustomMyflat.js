Array.prototype.myflat = function(td){
    let oarr = this;
    let res =[];
    customflat(oarr, td, res);
    return res;
}

function customflat(node, td, res){
    if(Array.isArray(node)){
        if(td>0){
            for(let i=0; i<node.length; i++){
                customflat(node[i], td-1, res);
            }
        } else{
            for(let i=0; i<node.length; i++){
                res.push(node[i]);
            }
        }
    } else{
        res.push(node);
    }
}

let arr2d = [10, 20,[50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];
let res1 = arr2d.flat(0);
let r1 = arr2d.myflat(0);
// console.log(res1);
console.log(r1);

let res2 = arr2d.flat(1);
let r2 = arr2d.myflat(1);
// console.log(res2);
console.log(r2);

let res3 = arr2d.flat(2);
let r3 = arr2d.myflat(2);
// console.log(res3);
console.log(r3);


let res4 = arr2d.flat(3);
let r4 = arr2d.myflat(3);
// console.log(res4);
console.log(r4);

let res5 = arr2d.flat(Infinity);
let r5 = arr2d.myflat(Infinity);
// console.log(res5);
console.log(r5);
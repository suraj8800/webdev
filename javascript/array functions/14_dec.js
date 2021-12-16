// question1
Array.prototype.myreduce = function(cb, iv){
    let oarr = this;
    let mypv;
    if(iv == undefined){
        mypv = oarr[0];
        for(let i = 1; i<oarr.length; i++){
            let mycv = oarr[i];
            mypv= cb(mypv, mycv, i, oarr);
        }
    }else{
        mypv = iv;
        for(let i =0 ; i< oarr.length; i++){
            let mycv = oarr[i];
            mypv = cb(mypc, mycv, i, oarr);
        }
    }
    return mypv;
}

let arr = [10, 20,30, 40, 50];

let sum = arr.myreduce(function(pv, cv, ci, oarr){
    console.log(pv +" " + cv + " " + ci);
    return pv + cv;
})
console.log(sum);

// reduce 
let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv +" " + cv + " " + ci);
    return pv + cv;
})
console.log(sum1);


// question2 :- count all prime using reduce
let arr1 = [ 51, 23, 37, 44, 73, 82, 97, 45];
let cp= arr1.reduce(function(pv, cv, ci, oarr){

})
console.log(cp);


// question3 :- flatten the 2d array

let arr2 = [[2 ,8, 10], [34], [45, 31, 25, 64, 72, 88], [], [25, 73]];
let res = [];


    res = arr2.reduce((pv, cv)=> {
        return pv.concat(cv);
    });

console.log(res);

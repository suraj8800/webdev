// Easy searching = Indexof, lastIndexof, includes
// complex searching = find, findindex
// complex searching and all filterd value = filter

let arr = [10, 20, 30, 40, 50, 60, 60, 50, 40, 30, 20, 10];
let iores = arr.indexOf(30);
let liores = arr.lastIndexOf(30);
let ires = arr.includes(30);

// give me the first value above 50
let fres = arr.find(function(v, i, oarr){
    return v > 50;
});

// give me the index of first value above 50
let fires = arr.findIndex(function(v, i, oarr){
    return v > 50;
});

// give me all values above 50
let fltrres = arr.filter(function(v, i, oarr){
    return v > 50;
})
console.log(iores);
console.log(liores);
console.log(ires);
console.log(fres);
console.log(fires);
console.log(fltrres);
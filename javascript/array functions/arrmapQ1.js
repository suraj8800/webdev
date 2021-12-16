// question:- use map function to produce
// [ 'S.M.', 'A.m.', 'I.M.', 'D.M.', 'K.M.', 'A.M.' ]
let arr = [
    "Sumeet Malik",
    "Amit malik",
    "Inderjeet Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

let res = arr.map(function(v, i, oarr){
    let nameparts = v.split(" ");
    let fname = nameparts[0];
    let lname = nameparts[1];

    let fnfc = fname[0];
    let lnfc = lname[0];
    let initial = fnfc + "." + lnfc +".";
    return initial;
});
console.log(res);
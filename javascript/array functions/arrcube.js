let arr = [5, 38, 24, 67, 71, 12, 24, 7];
// we need to return the cubes of values whose square <= 1000

let cubes = arr.filter(v => v*v <= 1000).map(v => v*v*v);
console.log(cubes);

// we need to return the cube of values whose cube <= 10000

let ans = arr.map(v=> v*v*v).filter(v3 => v3 <= 10000);
console.log(ans);

let ans1 = arr.filter(v => v*v*v <= 10000).map(v => v*v*v);
console.log(ans1);

// NOTE:- the best way to use map and filter is we have to use first filter then map
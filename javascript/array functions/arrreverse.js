let sarr = ["hello", "bello", "aello", "bye", "there", "pep"];
let narr = [21, 54, 12, 33, 98, 200, 76, 100, 11, 298, 34];

// String sort and reverse
sarr.sort();
console.log(sarr);

sarr.reverse();
console.log(sarr);

// number sort and reverse
// narr.sort(); // does an alphabetical sort
// console.log(narr);

// narr.reverse()
// console.log(narr);

narr.sort((a, b) => a-b);
console.log(narr);

narr.reverse();
console.log(narr);
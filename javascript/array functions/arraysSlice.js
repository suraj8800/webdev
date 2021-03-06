let arr = [10, 20, 30, 40, 50];

let na1 = arr.slice(1, 4); // from 1 to 3 (4 exclude)
displayArray(na1);

let na2 = arr.slice(1);// from 1 to end
displayArray(na2);

let na3 = arr.slice();// entire array it also used as clone
displayArray(na3);

let na4 = arr.slice(-3, -1);
displayArray(na4);

let na5 = arr.slice(-3);
displayArray(na5);

let na6 = arr.slice(1, -2);
displayArray(na6);

//shallow copy
let o1 = {
    age: 10
};

let o2 = {
    age: 20
};

let o3 = {
    age: 30
};

let anarr = [o1, o2, o3];
displayObjectiveArray(anarr);

let scopy = anarr.slice();
displayObjectiveArray(scopy);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

function displayObjectiveArray(arr){
    let str = "";
    for(let i=0; i< arr.length; i++){
        str += arr[i].age + ", ";
    }
    console.log(str +". ");
}
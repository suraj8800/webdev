//object -> group of key: values
// key: value -> property
// key: function -> method
let cap={
    name:'Steve',
    lastname:'Rogers',
    address: {
        city: 'Manhatten',
        state: 'Newyork'
    },
    age: 35,
    isAvenger: true,
    movies: ["first avenger", "winter soldier", "civil war"],
    sayHi: function(){
        console.log("cap say's Hi");
    }
};

//GET
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();

//SET and UPDATE
console.log('cap :', cap);
cap.age = 37;
cap.isAvenger = false;
cap.friend= ["Tony", "Bruce", "Peter"];
console.log("------- After add or update --------");
console.log('cap :', cap);

// Delete
delete cap.address;
console.log("------- After delete --------")
console.log('cap :', cap);

console.log('------ using for in loop---');
for(let key in cap){
    console.log(key, ' : ', cap[key]);
}

let propkey = 'age';
console.log(cap.age);
console.log(cap[propkey]);
console.log(cap['age']);

console.log(cap.xyz); // undefine key



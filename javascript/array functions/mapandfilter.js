let products = [
    {
        name: "T-shirt",
        price: 25
    },
    {
        name: "headphone",
        price: 125
    },
    {
        name: "keyboard",
        price: 75
    },
    {
        name: "Moniter",
        price: 200
    },
    
];

// we need to use map fucntin and filter function and return 
// the name of the product in uppercase, who have their price > =100

// using filter 
let filterproduct = products.filter(v => v.price >= 100).map(v => v.name.toUpperCase());
console.log(filterproduct);

// using map function
let fp = products.filter(p=> p.price >= 100).map(p=> p.name.toUpperCase());
console.log(fp);

// we need to return the name i uppercase where price >= 100
// be return the name in lowercase where price <= 100.
let mapproduct = products.map(function(v){
    if(v.price >= 100){
        return v.name.toUpperCase();
    }else{
        return v.name.toLowerCase();
    }
})
console.log(mapproduct);
var a = 10;
console.log("line 2", a);

function fn(){
    console.log("line 5", a);
    var a = 20;
    a++;
    console.log("line 8", a);
    if(a){
        var a = 30;
        a++;
        console.log("line 12", a);
    }
    console.log("line 14", a);
}
fn();
console.log("line no 17", a);
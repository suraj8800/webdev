// quest 1
Array.prototype.processString = function(sscb, lscb, critical){
    let oarr = this;
    for(let i=0; i<oarr.length; i++){
        let str = oarr[i];
        if(str.length > critical){
            lscb(str);
        }else{
            sscb(str);
        }
    }
    return this;
}

let arr = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "India won in Australia. England won't.",
    "India has gone to SA. India started well. But it rains.",
    "Lorem ipsum dolor. ipsum dolor lorem.",
];

arr.processString(handelShortstring, handelLongString, 40);
function handelShortstring(str){
    let res1 = str.split(".");
    let res2 = res1.filter(s => s.length>0);
    let res3 = res2.map(s => s.trim());
    let res4 = res3.map(s => s.split(" "));
    let res5 = res4.map(s => s.reverse());
    let res6 = res5.map(s => s.join(" "));
    let res7 = res6.join(". ");
    let res8 = res7+ ".";
    console.log("Short string = " +res8);
}

function handelLongString(str){
    let res1 = str.split(".");
    let res2 = res1.filter(s => s.length >0);
    let res3 = res2.map(s => s.trim());
    let res4 = res3.reverse();
    let res5 = res4.join(". ");
    let res6 = res5 + ".";
    console.log("Long String = " + res6 );
}

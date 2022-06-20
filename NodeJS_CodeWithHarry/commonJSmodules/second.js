let naba = {
    "name": "nabajyoti modak",
    "age": 22,
    "height":"5'10\""
}
function namkyahai(naam="papai"){
    console.log( naam );
    
}
module.exports.naba = naba;
module.exports.nam=namkyahai;
 console.log(module);

let obj = {
    a: 10,
    b:20
}
let { b } = obj;
console.log(b);
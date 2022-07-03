//common js - every file in nodejs is a module by default

var sim="pek"
var obj = {
    john:"agt",sim:sim //the value sim here is refering to the var sim in line 3
}
// console.log( obj ); when this module is imported by some other module then the code in this module is actually invoked, so this line is executed
 

//share
const john = "name is john";
const silly = "name is silly";
module.exports = { john, silly };
module.exports.person = obj;
console.log( module.exports );

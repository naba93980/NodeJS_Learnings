const os = require('os')
console.log(os.networkInterfaces());
console.log(os.userInfo());
const currentOS = {
    nam: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem:os.freemem()
}
console.log( currentOS );

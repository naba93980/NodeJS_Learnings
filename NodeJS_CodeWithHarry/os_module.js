// (function(exports,require,module,__filename,__dirname){})  -->module wrapper function
const os = require('os')
console.log( os.freemem() );//returns free ram in bytes
console.log( os.homedir() );
console.log( os.hostname() );
console.log( os.platform() );
console.log(os.release());
console.log( os.version() );
console.log( os.arch() );
console.log( os.endianness() );
console.log( os.tmpdir() );
console.log( os.totalmem() );
console.log( os.uptime() );
console.log( os.type() );
console.log( os.userInfo() );
console.log( os.networkInterfaces() );
console.log( os.loadavg() ); //for unix environment


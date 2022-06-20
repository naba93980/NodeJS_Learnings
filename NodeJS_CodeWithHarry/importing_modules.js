// const sec = require('./commonJSmodules/second.js');
// console.log(sec);
// sec.nam("nabajyoti modak hai re");
// sec.nam();


// const {Module}=require('module')
// console.log(Module._cache);
// console.log( module );



import { namkyahai } from "./ES6modules/second.mjs";
namkyahai();
import {naba as naam} from "./ES6modules/second.mjs"
console.log(naam);
import kuch from "./ES6modules/second.mjs"; //mjs module ta default ta export kortse
kuch();
import * as sabkuch from "./ES6modules/second.mjs"
console.log( sabkuch );
console.log(sabkuch.default);
console.log(kuch);
console.log( sabkuch.naba );
sabkuch.namkyahai("kamal");


import * as d from 'url' //returns entire object, which contains the default things inside an object
import sabkuch from 'url'//returns only default things inside object
console.log(d.default);
console.log(d);
console.log( sabkuch);
console.log( sabkuch.URL);
console.log( URL);






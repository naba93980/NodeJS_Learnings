/*
const { Module } = require("module");

console.log( "hello" );
console.log("bye" + "bye..");
console.log( "---------" );
console.log(typeof (Module));
console.log( "---------" );
console.log(typeof (Module.prototype));
console.log( "---------" );
console.log(Module);
console.log( "---------" );
console.log(Module.prototype);
console.log( "---------" );
console.log(Module.builtinModules);
console.log( "---------" );
console.log(typeof(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js']));
console.log( "---------" );
console.log((Module._cache));
console.log( "---------" );
console.log((Module._nodeModulePaths));
console.log( "---------" );
console.log((Module.globalPaths));
console.log( "---------" );
console.log((typeof (module)));
console.log( "---------" );
console.log( module );
console.log( "---------" );
console.log((Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js']==module));

console.log(Module.prototype.constructor);
console.log(Module.prototype.constructor.prototype.__proto__);

//Module is constructor having properties like builtin functions,globalpaths.
//Module is property of an Object which is used to create the module object which is the index.js file.
//Module constructor creates module file by inheriting properties from object mentioned above.
//module object is a property of _cache property of Module constructor.
//module is an object (which actually is the index.js file or any other .js file) which has properties like id, path, exports, parents etc.
console.log(Module.prototype.constructor == Module);
console.log( "---------" );
console.log(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js'].id);
console.log(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js'].path);
console.log( module.filename );
console.log(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js'].path);
console.log(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js']==module);//true
console.log(Module.builtinModules.indexOf("module"));//33
console.log(Module.builtinModules[33]);//module
console.log(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js']==Module.builtinModules[33]);//false
//builtin module - 'module' is not same as module property of _cache property of Module constructor.
//builtin module - 'module returns Module constructor
console.log(Module == require("module").Module);//true
console.log(module);//Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js']
console.log(module == Module.builtinModules[33]);
console.log(Module._cache['D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\index.js']==module);
*/
/*
//checking object destructuring
obj = {
    y:"ko",
    x:"hi",
}
const { y:k } = obj;
console.log( k );
const { x, y } = obj; //order of properties doesnot matter
console.log( x , y );
*/
//common js module
const x = require('./commonJSmodules/second')
console.log(x);

// const { Module } = require("module");
// console.log( Module );



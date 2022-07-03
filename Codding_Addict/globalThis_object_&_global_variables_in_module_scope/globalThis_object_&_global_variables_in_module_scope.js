//https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs


//all the 5 below are supplied by node js to the module and is present in the module scope

// console.log( __dirname );
// console.log( __filename );
// console.log(require('module'));
// console.log( process );

//global scope in node js module is actually module scope, so unlike in browser where a variable used to get tied to window object, in node js a variable lies within the module scope

//however like window object in browser their exist a global object(reffered by global or globalThis) which contains properties to be used across modules like setInterval,setTimeout etc

// setInterval(()=> {
//     console.log("hello");
    
// }, 1500);


//---------------------------------------------------------------------------------------

// module.exports.foo = 5;
// console.log(this); //module.exports object


// console.log(globalThis);  //or console.log(global) ->global object containing setInterval(), setTimeout() etc. and can be accessible from any module.
// function hello() {
//     console.log(this);   //->global object containing setInterval(), setTimeout() etc.
// }
// hello();


// (function(){
//   console.log(this);    //->global object containing setInterval(), setTimeout() etc.
// }());

//---------------------------------------------------------------------------------------



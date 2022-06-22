import * as sabkuch from 'events'
// console.log( sabkuch );
// console.log(sabkuch.EventEmitter.prototype);

//events module returns EventEmiter constructor having properties and also the constrcutor
//is used to create EventEmitter objects having its own properties...these properties can be accessed throught EventEmmitter constructor.prototype (somewhat like in js web api)

//event module also returns properties for defining events that are fired

const myEmitter = new sabkuch.EventEmitter();
myEmitter.on('hi', () => {
    console.log("printed hi");   
    setTimeout(() => {
        console.log( "printed bye" );
    },3000)
})
console.log( "Script is running" );
myEmitter.emit('hi');
console.log("Script is still running");
myEmitter.emit('hi');

// console.log(myEmitter._events);
//console.log(myEmitter._events['hi']);


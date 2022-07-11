const EventEmmiter = require('events');

const customEmitter = new EventEmmiter();
customEmitter.on('response', () => {
    console.log( "responding to response" ); 
})
customEmitter.on('response', (name,age) => {
    console.log( name, age ); 
})
customEmitter.emit('response','nabajyoti','22');
console.log( "end" );
















// The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate()
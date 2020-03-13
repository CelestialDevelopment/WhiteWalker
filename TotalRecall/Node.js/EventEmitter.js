const events = require('events');
const eventEmitter = new events.EventEmitter();

let myEvent = function ringBell() {
  console.log('Event is emitted');
}

eventEmitter.on('emitEvent', myEvent);

eventEmitter.emit('emitEvent');
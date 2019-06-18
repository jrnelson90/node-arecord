# Arecord For Node
Audio recorder for [Node.js](https://nodejs.org/), Based of [RedKenrok](https://github.com/RedKenrok)'s [node-audiorecorder](https://github.com/RedKenrok/node-audiorecorder).

## Installation
```
npm install --save node-arecord
```
## Usage

### Constructor
```javascript
// Import module.
const Arecord = require('node-arecord');

// Options is an optional parameter for the constructor call.
// If an option is not given the default value, as seen below, will be used.
const options = {
  program: `arecord`,     // Which program to use,`arecord`.
  device: null,       // Recording device to use.
  channels: 2,        // Channel count.
  format: `S16_LE`,   // Encoding type. (only for `arecord`)
  rate: 48000,        // Sample rate.
  type: `wav`,        // Format type.
};
// Optional parameter intended for debugging.
// The object has to implement a log and warn function.
const logger = console;

// Create an instance.
let audioIn = new Arecord(options, logger);
```

> 'arecord' will only work for linux based systems. If you can't capture any sound with 'arecord', try to change device to 'arecord -l'.

> See the [arecord documentation](https://linux.die.net/man/1/arecord) for more detail on its options.

### Methods
```javascript
// Creates and starts the recording process.
audioIn.start();
// Stops and removes the recording process.
audioIn.stop();
// Returns the stream of the recording process.
audioIn.stream();
```

### Examples

See the [examples directory](https://github.com/jrnelson90/node-arecord/tree/master/examples) for example usage.

## License

[MIT license](https://github.com/jrnelson90/node-arecord/blob/master/LICENSE)

// Dependency modules.
const test = require(`ava`);
// Custom module.
const Arecord = require(`../library`);

// Core functions.
test(`core`, function(t) {
	t.is(typeof(Arecord), `function`);
	
	// Instance.
	const audioRecorder = new Arecord();
	t.is(typeof(audioRecorder.start), `function`);
	t.is(typeof(audioRecorder.stop), `function`);
	t.is(typeof(audioRecorder.stream), `function`);
});

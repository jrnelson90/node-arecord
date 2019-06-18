// Dependency modules.
const test = require(`ava`);
// Custom module.
const Arecord = require(`../library`);

// Default arecord options.
test(`arecord`, function(t) {
	const audioRecorder = new Arecord({
		program: `arecord`
	});
	t.deepEqual(audioRecorder.options.program, `arecord`);
	t.deepEqual(audioRecorder.command.arguments, [
		`-q`,
		`-c`,
		`2`,
		`-r`,
		`48000`,
		`-t`,
		`wav`,
		`-f`,
		`S16_LE`
	]);
	t.deepEqual(audioRecorder.command.options, {
		encoding: `binary`
	});
});

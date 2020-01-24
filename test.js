
const uint = require('./index.js'),
	assert = require('assert');

let value = [10, 100], b = uint.uint8.toHex(value);

assert.equal(b, Buffer.from(value).toString('hex').toUpperCase());
assert.deepEqual(uint.uint8.fromHex(b), new Uint8Array(value));
assert.deepEqual(uint.uint8.toUint4(value), [0, 10, 6, 4]);

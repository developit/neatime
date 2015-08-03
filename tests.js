var assert = require('assert');
	neatime = require('./'),
	MIN = 60000,
	HOUR = MIN*60,
	DAY = HOUR*24;

// within the last minute
assert.equal(
	neatime(new Date()-1e4),
	'Just now'
);

// within the last hour
assert.equal(
	neatime(Date.now() - 16*MIN),
	'16m'
);

// within the last hour
assert.equal(
	neatime(Date.now() - 2*HOUR),
	'2h'
);

// within the last 7 days
assert.equal(
	neatime(Date.now() - 4*DAY),
	'4d'
);

// over 7 days ago gives a simple date
var d = new Date();
d.setMonth(d.getMonth()-1);
var m = d.toDateString().split(' ')[1]
assert.equal(
	neatime(m+' 1, '+d.getFullYear()),
	m+' 1'
);

// over half a year ago adds the year
d.setFullYear(d.getFullYear()-1);
assert.equal(
	neatime(m+' 1, '+d.getFullYear()),
	m+' 1, '+d.getFullYear()
);

console.log('All tests passed');
process.exit(0);

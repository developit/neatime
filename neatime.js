/** Returns a simple relative time string
 *  @example
 *      neatime(new Date()-1e4) == 'Just now'     // within the last minute
 *      neatime(Date.now()-1e6) == '16m'          // within the last hour
 *      neatime(Date.now()-1e7) == '2h'           // within the last hour
 *      neatime('Dec 31, 2014') == '4d'           // within the last 7 days
 *      neatime('Dec 25, 2014') == 'Dec 25'       // over 7 days ago gives a simple date
 *      neatime('July 4, 2014') == 'Jul 4, 2014'  // over half a year ago adds the year
 */
function neatime(text) {
	var now = new Date(),
		date = new Date(text),
		diff = (now.getTime() - date.getTime()) / 1000;
	if (diff <= 60) {
		text = 'Just now';
	}
	else if ( (diff /= 60) < 60 ) {
		text = (diff|0) + 'm';
	}
	else if ( (diff /= 60) < 24 ) {
		text = (diff|0) + 'h';
	}
	else if ( (diff /= 24) < 7 ) {
		text = (diff|0) + 'd';
	}
	else {
		text = String(date).split(' ')[1] + ' ' + date.getDate();
		if (diff>182 && now.getYear()!==date.getYear()) {
			text += ', ' + date.getFullYear();
		}
	}
	return text;
}
neatime.neatime = neatime;

module.exports = neatime;

neatime [![npm](https://img.shields.io/npm/v/neatime.svg)](http://npm.im/neatime) [![bower](https://img.shields.io/bower/v/neatime.svg)](http://bower.io/search/?q=neatime)
=======

Returns a simple relative time string.


Usage Examples
--------------


```js
// within the last minute
neatime(new Date()-1e4) == 'Just now'

// within the last hour
neatime(Date.now()-1e6) == '16m'

// within the last hour
neatime(Date.now()-1e7) == '2h'

// within the last 7 days
neatime('Dec 31, 2014') == '4d'

// over 7 days ago gives a simple date
neatime('July 20, 2015') == 'Jul 20'

// over half a year ago adds the year
neatime('July 4, 2014') == 'Jul 4, 2014'
```


License
-------

WTFPL

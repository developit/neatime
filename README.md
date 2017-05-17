neatime [![npm]](http://npm.im/neatime) [![bower]](http://bower.io/search/?q=neatime) [![travis]](https://travis-ci.org/developit/neatime)
=======

[![Greenkeeper badge](https://badges.greenkeeper.io/developit/neatime.svg)](https://greenkeeper.io/)

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


[npm]: https://img.shields.io/npm/v/neatime.svg
[bower]: https://img.shields.io/bower/v/neatime.svg
[travis]: https://img.shields.io/travis/developit/neatime.svg

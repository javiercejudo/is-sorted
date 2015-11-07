# is-sorted

[![TRAVIS](https://secure.travis-ci.org/javiercejudo/is-sorted.png)](http://travis-ci.org/javiercejudo/is-sorted)

A small module to check if an Array is sorted.


## Example

``` javascript
var sorted = require('is-sorted')

console.log(sorted([1, 2, 3]))
// => true

console.log(sorted([3, 1, 2]))
// => false

// supports custom checks
var gte = require('lodash.gte');
console.log(sorted([3, 2, 1], gte)
// => true
```


## License

This library is free and open-source software released under the MIT license.

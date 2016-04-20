# key-map 🔜

**When you remove duplicates in a collection** mapped by keys, you may want to **keep track of old keys** and their new equivalent.

[![npm version](https://img.shields.io/npm/v/key-map.svg)](https://www.npmjs.com/package/key-map)
[![build status](https://img.shields.io/travis/derhuerst/key-map.svg)](https://travis-ci.org/derhuerst/key-map)
[![dependency status](https://img.shields.io/david/derhuerst/key-map.svg)](https://david-dm.org/derhuerst/key-map)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/key-map.svg)](https://david-dm.org/derhuerst/key-map#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/key-map.svg)


## Installing

```
npm install key-map
```


## Usage

```js
const keyMap = require('key-map')
const m = keyMap(['a', 'b', 'c'])

m.get('a') // -> 'a'
m.get('b') // -> 'b'
m.get('c') // -> 'c'

m.map('c', 'b') // map c to b
m.map('b', 'a') // map b to a

m.get('a') // -> 'a'
m.get('b') // -> 'a'
m.get('c') // -> 'a'
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/key-map/issues).

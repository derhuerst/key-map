# key-map 🔜

**When you remove duplicates in a collection** mapped by keys, you may want to **keep track of old keys** and their new equivalent.

[![dependency status](https://img.shields.io/david/derhuerst/key-map.svg)](https://david-dm.org/derhuerst/key-map#info=dependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/key-map.svg)


## Installing

```
npm install key-map
```


## Usage

```js
const keyMap = require('key-map')
const m = keyMap.with(['a', 'b', 'c'])

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

'use strict'

const {Suite} = require('benchmark')
const keyMap = require('.')

const m = keyMap(['a', 'b', 'c'])
m.map('c', 'b')
m.map('b', 'a')

new Suite()

.add('unmapped get()', function () {
	var i = 0
	while (i++ < 100) m.get('a')
})
.add('2x-mapped get()', function () {
	var i = 0
	while (i++ < 100) m.get('c')
})

.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.on('cycle', (e) => {
	console.log(e.target.toString())
})
.run()

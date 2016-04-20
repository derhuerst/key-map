'use strict'

const test   = require('tape')
const keyMap = require('./index')



test('map', (t) => {
	t.plan(2)
	const m = keyMap()

	t.equal(typeof m.map, 'function')
	t.equal(m.map('a', 'b'), 'b')
})

test('get', (t) => {
	t.plan(4)
	const m = keyMap(['a'])

	t.equal(typeof m.get, 'function')
	t.equal(m.get('a'), 'a')
	t.equal(m.get('_'), undefined)

	m.map('c', 'b')
	m.map('b', 'a')
	t.equal(m.get('c'), 'a')
})

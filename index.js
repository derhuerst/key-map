'use strict'

const keyMap = (keys) => {
	const data = {}
	if (Array.isArray(keys)) {
		for (let key of keys) data[key] = key
	}

	const map = (before, after) => {
	  	data[before] = after
	  	return after
	}

	const get = (key) => {
		while (key !== data[key]) key = data[key]
		return key
	}

	return {map, get}
}

module.exports = keyMap

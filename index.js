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

	const toObject = () => {
		const obj = Object.create(null)
		for (let before in data) {
			const after = get(before)
			obj[before] = after
		}
		return obj
	}

	return {map, get, toObject}
}

module.exports = keyMap

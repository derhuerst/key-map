'use strict'

const keyMap = (keys) => {
	const map = {}
	if (Array.isArray(keys))
	for (let key of keys) map[key] = key

	return {
		  map: function (before, after) {
		  	map[before] = after
		  	return after
		}

		, get: function (before) {
			let after = before
			while (after !== map[after]) {after = map[after]}
			return after
		}
	}
}

module.exports = keyMap

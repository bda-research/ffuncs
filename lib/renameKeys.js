
'use strict';

const {curry, fromPairs, map, keys} = require('ramda');

// {k : v} -> {k : x} -> {x : v}
module.exports = curry(
	(keysMap, obj) =>
		fromPairs(
			map(key => [keysMap[key] || key, obj[key]])(keys(obj))
		)
);

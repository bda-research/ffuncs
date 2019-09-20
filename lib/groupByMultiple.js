
'use strict';

const {map, curry, groupBy, times, last, mapObjIndexed, init} = require('ramda');
const mapDeep = require('./mapDeep.js');

const groupByMultiple = curry((fields, data) => {
	if (fields.length === 1) return groupBy(fields[0], data);
	
	return mapDeep(
		fields.length -1,
		groupBy(last(fields)),
		groupByMultiple(init(fields), data)
	);
});

module.exports = groupByMultiple;

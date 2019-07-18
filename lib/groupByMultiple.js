
'use strict';

const {curry, groupBy, times, last, mapObjIndexed, init} = require('ramda');

const groupByMultiple = curry((fields, data) => {
	if (fields.length === 1) return groupBy(fields[0], data);
	
	let groupByLast = groupBy(last(fields));
	
	times(() => {
		groupByLast = mapObjIndexed(groupBy);
	}, fields.length - 1);

	return groupByLast(groupByMultiple(init(fields), data));
});

module.exports = groupByMultiple;

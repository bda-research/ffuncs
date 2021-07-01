
'use strict';

const R = require('ramda');
const mapDeep = require('./mapDeep.js');
const groupByMultiple = require('./groupByMultiple.js');

module.exports = R.curry( (valueFn, keyFns, predicate, statFn, items) => R.compose(
	R.map(
		R.compose(statFn, R.map(valueFn))
	),
	groupByMultiple(keyFns),
	R.filter(predicate)
)(items));

// module.exports = R.curry( (valueFn, keyFns, predicate, statFn, items) =>{
// 	return groupByMultiple(keyFns, R.filter(predicate, items)).map(R.compose(statFn, R.map(valueFn)));
// });

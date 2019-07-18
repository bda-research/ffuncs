
'use strict';

const R = require('ramda');
const mapDeep = require('./mapDeep.js');
const groupByMultiple = require('./groupyMultiple.js');

module.exports = R.curry( (valueFn, keyFns, predicate, statFn, items) => R.compose(
	mapDeep(
		keyFns.length,
		R.compose(statFn, R.map(valueFn))
	),
	R.tap(console.log),
	groupByMultiple(keyFns),
	R.filter(predicate)
)(items));

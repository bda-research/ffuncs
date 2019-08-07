
'use strict';

const R = require('ramda');

const mapDeep = R.curry(
	(nLevel, fn, functor) => nLevel <= 1 ? R.map(fn, functor) : R.map(mapDeep(nLevel-1, fn), functor)
);

module.exports = mapDeep;

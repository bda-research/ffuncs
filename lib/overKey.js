
'use strict';

const R = require('ramda');

/**
 *    String → (a → b) → {String: a} → {String: b}
 *
 *
 */
module.exports = R.curry((key, fn) => R.over(R.lensProp(key), fn));


'use strict';

const {length, uniq, compose} = require('ramda');

module.exports = compose(length, uniq);

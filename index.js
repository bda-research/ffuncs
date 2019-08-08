
'use strict';

module.exports = {
	curry: require('./backend/curry.js'),
	vectorize: require('./backend/vectorize.js'),
	memoize: require('./backend/memoize.js'),
	addFields: require('./lib/addFields.js'),
	countDistinct: require('./lib/countDistinct.js'),
	groupByMultiple: require('./lib/groupByMultiple.js'),
	mapDeep: require('./lib/mapDeep.js'),
	renameKeys: require('./lib/renameKeys.js'),
	statGroupBy: require('./lib/statGroupBy.js'),
	overKey: require('./lib/overKey.js'),
};

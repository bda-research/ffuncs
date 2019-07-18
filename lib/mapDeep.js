
'use strict';

const R = require('ramda');

module.exports = R.curry((nLevel, fn, functor) => {
	return mp(nLevel, functor);
	function mp(nLevel, functor) {
		if(nLevel === 1){
			//nLevel = nLevel + 1;
			return R.map(fn, functor);
		}
		
		return R.map(value => mp(nLevel - 1, value), functor);
	}
});

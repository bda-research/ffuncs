
'use strict';

const R = require('ramda');

module.exports = R.curry((nLevel, fn, functor) => {
	return mp(functor);
	function mp(functor) {
		if(nLevel === 1){
			return R.map(fn, functor);
		}

		console.log(functor);
		nLevel--;
		
		return R.map(mp, functor);
	}
});

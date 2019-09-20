
'use strict';

const {last, init, map, append, chain, of} = require('ramda');

// [[a], [b], [c]...] -> [[a,b,c...] ...]
module.exports = function combine(listOfItems) {
	if(listOfItems.length === 0){
		return [];
	}else if(listOfItems.length === 1){
		return listOfItems[0].map(of);
	}
	
	const prev = combine(init(listOfItems));
	
	return chain(
		itemsOfPrev => map(
			item => append(item, itemsOfPrev),
			last(listOfItems)
		),
		prev
	);
};

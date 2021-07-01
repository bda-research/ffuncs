
'use strict';

const {map, curry, groupBy, times, last, mapObjIndexed, init} = require('ramda');
const mapDeep = require('./mapDeep.js');

class DataTree{
	constructor(valueObject, depth) {
		this.valueObject=valueObject;
		this.depth = depth;
	}
	static of (val,depth){
		return new DataTree(val,depth);
	}
	map (g){
		return DataTree.of(
			mapDeep(this.depth,g,this.valueObject),
			this.depth
		);
	}
	ap(other){
		return other.map(this.valueObject);
	}
}

const groupByMultiple =curry((fields, data)=>{
	return new DataTree(_groupByMultiple(fields, data), fields.length);
});

const _groupByMultiple = curry((fields, data) => {
	if (fields.length === 1) return groupBy(fields[0], data);
	
	return mapDeep(
		fields.length -1,
		groupBy(last(fields)),
		_groupByMultiple(init(fields), data)
	);
});

module.exports = groupByMultiple;

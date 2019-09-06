
'use strict';

const expect = require('chai').expect;
const combine = require('../lib/combine.js');

describe('combine', () => {
	const testCase = [[1,2,3,4], [5,6,7,8,9], ['a','b','c'],[400,404,503]];
	
	it('should return individual item when only one in list', () => {
		const rst = combine([testCase[0]]);
		expect(rst.length).to.be.eql(testCase[0].length);
	});

	it('should return empty array when receive empty array', () => {
		const rst = combine([]);
		expect(rst.length).to.be.eql(0);
	});

	it('should return array contains sub-array which length equals received ', () => {
		const rst = combine(testCase);
		rst.map(items => expect(items.length).to.be.eql(testCase.length) );
	});

	it('should return array witch length equals product of all sub-array\'s length', () => {
		const rst = combine(testCase);
		expect(rst.length).to.be.eql(testCase.reduce((acc, cur)=> acc * cur.length, 1));
	});
	
	it('should return array that has first array consists of each items\' first element', () => {
		const rst = combine(testCase);
		const everyFristElement = rst[0].every((ele, idx) => ele == testCase[idx][0]);
		
		expect(everyFristElement).to.be.true;
	});
});

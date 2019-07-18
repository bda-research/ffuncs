
'use strict';

const expect = require('chai').expect;
const mapDeep = require('../lib/mapDeep.js');

describe('mapDeep', () => {
	const plusOne = (n) => n + 1;
	
	it('should map functors', ()=>{
		const oneLevelPlus = mapDeep(1, plusOne);
		expect(oneLevelPlus([1,2,3])).to.eql([2,3,4]);
	});
	
	it('should map multi levels', () => {
		const multiLevelPlus = mapDeep(3, plusOne);
		console.log(multiLevelPlus([[[1],[100]],[[2],[102]],[[3],[103]]]));
		expect(multiLevelPlus([[[1],[100]],[[2],[102]],[[3],[103]]])).to.eql([[[2],[101]],[[3],[103]],[[4],[104]]]);
	});
	
	it('should recursively map', () => {
		
	});
	
});

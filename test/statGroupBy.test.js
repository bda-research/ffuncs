
'use strict';

const expect = require('chai').expect;
const R = require('ramda');
const statGroupBy = require('../lib/statGroupBy.js');
const items = require('./fixture/index.js').items;

describe('statGroupBy', () => {
	it('should have same statistic result ', () => {
		const grouped = statGroupBy(R.prop('finalPrice'),[R.prop('category')], R.T, R.mean, items);
		
		for(const groupKey of Object.keys(grouped.valueObject)){
			const priceOfOneCategoryItems = items.filter(item => item.category === groupKey).map(item => item.finalPrice);
			
			expect(grouped.valueObject[groupKey]).to.be.eql(R.mean(priceOfOneCategoryItems));
		}
	});

	it('should group by multiple key functions', () => {
		const grouped = statGroupBy(R.prop('finalPrice'),[R.prop('category'), R.prop('quarter')], R.T, R.mean, items);

		const category = 'Home Appliance';
		const quarter = '4Q2018';
		
		const priceListOfItems = items
			  .filter(item => item.category === category && item.quarter === quarter)
			  .map(item => item.finalPrice);
		
		expect(grouped.valueObject[category][quarter]).to.be.eql(R.mean(priceListOfItems));
	});
});


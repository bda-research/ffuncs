
'use strict';

const expect = require('chai').expect;
const R = require('ramda');
const groupByMultiple = require('../lib/groupByMultiple.js');
const items = require('./fixture/index.js').items;

describe('groupByMultiple', () => {
	it('should group by one key function', () => {
		const grouped = groupByMultiple([R.prop('category')], items);
		const groupKeys = Object.keys(grouped.valueObject);
		expect(groupKeys).to.be.eql(R.uniqBy(R.prop('category'), items).map(R.prop('category')));
		
	});

	it('should group by multiple key functions', () => {
		const grouped = groupByMultiple([R.prop('category'), R.prop('quarter')], items);

		const category = 'Home Appliance';
		const quarterKeys = Object.keys(grouped.valueObject[category]);
		const itemsByCategory = items.filter(item => item.category===category).map(item=>item.quarter);
		
		expect(quarterKeys).to.be.eql(R.uniq(itemsByCategory));
	});
});


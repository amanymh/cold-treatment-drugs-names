import { expect } from 'chai';
import coldTreatmentDrugsNames from './index';

describe('cold-treatment-drugs-names', function() {
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(coldTreatmentDrugsNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain `panadol`', function() {
			expect(coldTreatmentDrugsNames.all).to.include('panadol');
		});
	});

	describe('random', function() {
		it('should return a random item from the coldTreatmentDrugsNames.all', function() {
			var randomItem = coldTreatmentDrugsNames.random();
			expect(coldTreatmentDrugsNames.all).to.include(randomItem);
		});

		it('should return an array of random items if passed a number', function() {
			var randomItems = coldTreatmentDrugsNames.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item) {
				expect(coldTreatmentDrugsNames.all).to.include(item);
			});
		});
	});
});

import uniqueRandomArray from 'unique-random-array';
import coldTreatmentDrugsNames from './cold-treatment-drugs-names.json';

const getRandomItem = uniqueRandomArray(coldTreatmentDrugsNames);

module.exports = {
	all: coldTreatmentDrugsNames,
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		const randomItems = [];
		for (let i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}

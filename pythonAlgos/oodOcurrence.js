/*
you need to make a function that takes an array of numbers as a parameter

you need to loop through the array a check which item is is repeated  twice (that have pairs)

there should be a number that does not have a pair

no mater if the number is the same as a number that that came before if there is no other number that is the same moving forward the number does not have a pair 

you should return the number with out a pair 

if there is only one number in the  array return that number
*/

// let = rf=
const frequency = (arr = []) => {
	let dic = {};
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		let repeated = 0;
		if (arr.length == 0) {
			return {};
		} else {
			for (let item of arr) {
				if (item == current) {
					repeated++;
					dic[current] = repeated;
				}
			}
		}
	}
	return dic;
};

const oodOccurrence = (arr) => {
	let dic = {};
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		let repeated = 0;
		if (arr.length == 0) {
			return [];
		} else if (arr.length == 1) {
			return arr[0];
		} else {
			for (let item of arr) {
				if (item == current) {
					repeated++;
					dic[current] = repeated;
				}
			}
		}
	}
	for (key in dic) {
		if (dic[key] % 2 == 1) {
			return key;
		}
	}
};

console.log(oodOccurrence([1, 1, 3]));

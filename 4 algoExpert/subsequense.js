const isValidSubsequence = (array, sequence) => {
	let isvalid = false;
	let pointer = 0;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] == sequence[pointer]) {
			pointer++;
		}
		if (pointer == sequence.length) {
			isvalid = true;
		}
	}
	return isvalid;
};
// var ;
// let ;
// const

console.log(isValidSubsequence([1, 2, 3, 4, 5, 6], [1, 6, 5]));
console.log(isValidSubsequence([1, 2, 3, 4, 5, 6], [1, 3, 5]));

const isValidSubsequence2 = (array, sequence) => {
	let counter = 0;
	array.forEach((num) => num == sequence[counter] && counter++);
	return counter == sequence.length;
};

console.log(isValidSubsequence2([1, 2, 3, 4, 5, 6], [1, 2, 5]));
console.log(isValidSubsequence2([1, 2, 3, 4, 5, 6], [1, 6, 5]));

let pointer;
console.log(pointer);

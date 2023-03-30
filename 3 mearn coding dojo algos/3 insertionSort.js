const insertionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let j = i;
		while (arr[j] < arr[j - 1]) {
			[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			j--;
		}
	}
	return arr;
};

console.log(insertionSort([20, 2, 15, 9, 5, 10]));

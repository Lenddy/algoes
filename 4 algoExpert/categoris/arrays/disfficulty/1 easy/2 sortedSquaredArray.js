function sortedSquaredArray(array) {
	//take in a order list from 0 or 1 to infinity and this lists can not be empty
	// give back a list with the same length(size)
	//the new list that we are giving back must contains the squares of the numbers of the first list  also from the smallest to the biggest
	//squares of a number is that number times it self
	const newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(array[i] ** 2);
	}
	return newArr;
}

console.log(sortedSquaredArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sortedSquaredArray2(array) {
	// let sortArr = array.sort()
	//take in a order list from 0 or 1 to infinity and this lists can not be empty
	// give back a list with the same length(size)
	//the new list that we are giving back must contains the squares of the numbers of the first list  also from the smallest to the biggest
	//squares of a number is that number times it self
	let newArr = [];
	array.forEach((element) => {
		newArr.push(element ** 2);
	});
	return selectionSort(newArr);
}

function selectionSort(nums = []) {
	const len = nums.length;
	let selectedIdx = 0;
	let idxOfCurrMin = 0;

	while (selectedIdx < len) {
		for (let i = selectedIdx; i < len; i++) {
			if (nums[i] < nums[idxOfCurrMin]) {
				idxOfCurrMin = i;
			}
		}

		if (nums[selectedIdx] !== nums[idxOfCurrMin]) {
			// Swap.
			[nums[selectedIdx], nums[idxOfCurrMin]] = [
				nums[idxOfCurrMin],
				nums[selectedIdx],
			];
		}
		selectedIdx += 1;
		// reset idxOfCurrMin to the next selected index we are going to work with to find the next min
		idxOfCurrMin = selectedIdx;
	}
	return nums;
}

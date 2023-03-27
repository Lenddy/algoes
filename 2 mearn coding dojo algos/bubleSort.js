// bubbleSOrt

const bubbleSort = (arr) => {
	//create a while loop that keeps running until the array is sorted
	//check if the next index is not undefine or  it exist
	//check if  the current index  is less than the next index
	//if it is bigger than the next index you need to swap them
	//if it is not you need to keep moving through the arr
	//if is sorted is== to true return the array
	//return the sorted array
	let sorted = false;
	// let temp;
	if (arr.length == 0 || arr.length == 1) {
		return arr;
	} else {
		while (!sorted) {
			sorted = true;
			for (let i = 0; i < arr.length - 1; i++) {
				if (arr[i] > arr[i + 1] && arr[i + 1] != undefined) {
					//!using a temp variable
					// temp = arr[i];
					// arr[i] = arr[i + 1];
					// arr[i + 1] = temp;
					//!using destructuring to have the same result in one line as using a temp
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					sorted = false;
				}
			}
			if (sorted == true) {
				return arr;
			}
		}
	}
};

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
console.log(bubbleSort([9]));

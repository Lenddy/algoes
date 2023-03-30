const insertionSort = (arr) => {
	let temp;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			console.log(arr[i]);
			console.log(arr[j]);

			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
			// if(arr[j] > arr[i]){
			//     temp = arr[j];
			// 	arr[j] = arr[i];
			// 	arr[i] = temp;
			// }
			else break;
		}
	}
	return arr;
};

console.log(insertionSort([20, 2, 5, 6, 9, 10]));

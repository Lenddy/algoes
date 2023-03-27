/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
	constructor() {
		/**
		 * 0th index not used, so null is a placeholder. Not using 0th index makes
		 * calculating the left and right children's index cleaner.
		 * This also effectively makes our array start at index 1.
		 */
		this.heap = [null];
	}

	//retrieve the top (minimum) value with out removing it
	//time an space complexity should be o(1)
	top() {
		return this.heap[1];
	}

	/*
		inserte a new number into the heap and maintains the heaps order 
		1push new num to the back then .
		2 iteratevey swap the new numb with is parent while it is smatle thatn its parent 
		*When 0th index is unused == null
		*Parent is located at Math.floor(i / 2);.
		*Left child is located at i * 2.
		*Right child is located at (i * 2) + 1.
	*/

	insert(num) {
		this.heap.push(num);
		console.log(num);
		let i = this.heap.length - 1;
		let p = Math.floor(i / 2);
		let temp;
		while (num < this.heap[p]) {
			// console.log("hello");
			temp = this.heap[p];
			this.heap[p] = num;
			this.heap[i] = temp;
			// console.log(this.heap);
		}

		return this.heap;
	}

	deleteMin() {
		if (this.heap.length === 1) {
			return null;
		}
		if (this.heap.length === 2) {
			return this.heap.pop();
		}
		let min = this.heap[1];
		this.heap[1] = this.heap.pop();
		let i = 1;
		let left = i * 2;
		let right = i * 2 + 1;
		let minIdx = i;
		while (
			this.heap[left] &&
			(this.heap[left] < this.heap[minIdx] ||
				this.heap[right] < this.heap[minIdx])
		) {
			minIdx = this.heap[left] < this.heap[right] ? left : right;
			let temp = this.heap[minIdx];
			this.heap[minIdx] = this.heap[i];
			this.heap[i] = temp;
			i = minIdx;
			left = i * 2;
			right = i * 2 + 1;
		}
		return min;
	}

	/**
	 * Logs the tree horizontally with the root on the left and the index in
	 * parenthesis using reverse inorder traversal.
	 */
	printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
		if (parentIdx > this.heap.length - 1) {
			return;
		}

		spaceCnt += spaceIncr;
		this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

		console.log(
			" ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
				`${this.heap[parentIdx]} (${parentIdx})`
		);

		this.printHorizontalTree(parentIdx * 2, spaceCnt);
	}
}

const mh = new MinHeap();

// console.log(mh.t/op());
mh.insert(2);
mh.insert(5);
mh.insert(7);
mh.insert(8);
mh.insert(3);
mh.insert(9);
mh.insert(4);
// console.log(mh.top());

console.log(mh.heap);
mh.deleteMin();

mh.printHorizontalTree();

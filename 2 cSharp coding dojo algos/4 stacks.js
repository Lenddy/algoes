class stack {
	constructor() {
		this.items = [];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	push(val) {
		return this.items.push(val);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	size() {
		return this.items.length;
	}

	print() {
		console.log(this.items.toString());
	}

	clear() {
		this.items = [];
	}
}

const s = new stack();

console.log(s.isEmpty());
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());
s.print();
s.pop();
console.log(s.size());

console.log(s);
// constructor() {
//     this.items = [];
// }
// push(item) {
//     this.items.push(item);
// }
// pop() {
//     return this.items.pop();
// }
// peek() {
//     return this.items[this.items.length - 1];
// }
// isEmpty() {
//     return this.items.length === 0;
// }
// size() {
//     return this.items.length;
// }
// clear() {
//     this.items = [];
// }
// print() {
//     console.log(this.items.toString());
// }

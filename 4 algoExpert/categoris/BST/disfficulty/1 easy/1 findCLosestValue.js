//!using recursion
//O(log(n)) time | O(log(n)) space
function findClosestValueInBst(tree, target) {
	//using a helper method
	return helper(tree, target, tree.value);
}
//helper function
const helper = (tree, target, closest) => {
	//if the node is == null we return the closest number
	if (tree == null) {
		return closest;
	}
	//if the absolute value(abs) of the closest node is greater than the abs of the current value in the node that we are on  we will update what closest is to be the current value in the node
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	//deciding to go left or right depending on the target that we have
	if (target < tree.value) {
		return helper(tree.left, target, closest);
	} else if (target > tree.value) {
		return helper(tree.right, target, closest);
	}
	//if the value in the node is == to the target we return closest
	else return closest;
};

//using a loop
//O(log(n)) time | O()1 space
function fCVIBst(tree, target) {
	//using a helper method
	return helper2(tree, target, tree.value);
}

//helper function
const helper2 = (tree, target, closest) => {
	//to point to the current node value that we are on
	let curretNode = tree;

	while (curretNode !== null) {
		//if the absolute value(abs) of the closest node is greater than the abs of the current value in the node that we are on  we will update what closest is to be the current value in the node
		if (Math.abs(target - closest) > Math.abs(target - curretNode.value)) {
			closest = curretNode.value;
		}
		//deciding to go left or right depending on the target that we have
		if (target < curretNode.value) {
			curretNode = curretNode.left;
		} else if (target > curretNode.value) {
			curretNode = curretNode.right;
		}
		//if the value in the node is == to the target we break out of the loop
		else break;
	}
	return closest;
};

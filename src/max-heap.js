const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.insertNode.firstCall = [];
	}

	push(data, priority) {
		const node = new Node(data,priority)
		this.insertNode(node)
		this.shiftNodeUp(node)
	}

	pop() {
		if (this.parentNodes.length > 0) {
			this.parentNodes.sort(compare);
			return this.parentNodes.pop().data
		}
	}

	detachRoot() {
		const root = this.root
		this.root = null
		return root
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return this.parentNodes.length == 0;
	}

	clear() {
		this.root = null
		this.parentNodes = []
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
		} else {
			if (!this.root.left) {
				this.root.left = node
			} else if (!this.root.right) {
				this.root.right = node
			} else if (!this.root.left.left) {
				this.root.left.left = node
			} else if (!this.root.left.right) {
				this.root.left.right = node
			}
		}
		this.parentNodes.push(node)
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

function compare(a,b) {
  if (a.priority < b.priority)
    return -1;
  if (a.priority > b.priority)
    return 1;
  return 1;
}

module.exports = MaxHeap;

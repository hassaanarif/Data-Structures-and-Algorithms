class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.leftChild = left;
    this.rightChild = right;
  }
}

class BianrySearchTree {
  constructor() {
    this.root = null;
    this.result = [];
  }

  get returnRoot() {
    return this.root;
  }

  insert = (value) => {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.leftChild === null) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (current.rightChild === null) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  };

  find = (value) => {
    let current = this.root;

    while (current !== null) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else return console.log("True");
    }
    return console.log("False");
  };

  traversePreOrder = (root) => {
    if (root == null) return;
    console.log(root.value);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  };

  traverseInOrder = (root) => {
    if (root == null) return;
    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  };

  traversePostOrder = (root) => {
    if (root == null) return;
    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.value);
  };

  height = (root) => {
    if (root == null) {
      return -1;
    }
    if (root.leftChild == null && root.rightChild == null) {
      return 0;
    }
    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  };

  minimunValueInBST = (root) => {
    if (root === null) return;
    let current = root;
    while (current.leftChild) {
      current = current.leftChild;
    }
    console.log(current.value);
  };

  printBST = () => {
    console.log(this.root);
  };

  minimunValueInBT = (root) => {
    if (root === null) return;
    if (root.leftChild === null && root.rightChild === null) {
      return root.value;
    }
    let left = this.minimunValueInBT(root.leftChild);
    let right = this.minimunValueInBT(root.rightChild);

    if (root.leftChild && root.rightChild) {
      return Math.min(Math.min(left, right), root.value);
    }
    return Math.min(left || right), root.value;
  };

  equals = (first, second) => {
    if (first == null && second == null) {
      return true;
    } else if (first != null && second != null) {
      return (
        first.value == second.value &&
        this.equals(first.leftChild, second.leftChild) &&
        this.equals(first.rightChild, second.rightChild)
      );
    }
    return false;
  };

  isBinarySearchTree = (root, min = -Infinity, max = Infinity) => {
    if (root == null) {
      return true;
    }
    if (root.value < min || root.value > max) {
      return false;
    }
    return (
      this.isBinarySearchTree(root.leftChild, min, root.value - 1) &&
      this.isBinarySearchTree(root.rightChild, root.value + 1, max)
    );
  };

  getNodeAtDistance = (root, distance) => {
    if (root == null) return;
    if (distance == 0) {
      this.result.push(root.value);
      return;
    }
    this.getNodeAtDistance(root.leftChild, distance - 1);
    this.getNodeAtDistance(root.rightChild, distance - 1);
    return this.result;
  };

  traverseLevelOrder = (root) => {
    for (let i = 0; i <= this.height(root); i++) {
      var result = this.getNodeAtDistance(root, i);
    }
    console.log(result);
  };
}

let firstTree = new BianrySearchTree();

firstTree.insert(7);
firstTree.insert(4);
firstTree.insert(9);
firstTree.insert(1);
firstTree.insert(6);
firstTree.insert(8);
firstTree.insert(10);
firstTree.insert(5);

let secondTree = new BianrySearchTree();

secondTree.insert(7);
secondTree.insert(4);
secondTree.insert(9);
secondTree.insert(1);
secondTree.insert(6);
secondTree.insert(8);
secondTree.insert(10);
secondTree.insert(5);

firstTree.traverseLevelOrder(firstTree.returnRoot);

// bst.traversePreOrder(bst.returnRoot);
// console.log("***************");
// bst.traverseInOrder(bst.returnRoot);
// console.log("***************");
// bst.traversePostOrder(bst.returnRoot);

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.height = 0;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  get thisRoot() {
    return this.root;
  }

  insert = (root, value) => {
    if (root == null) {
      let node = new Node(value);
      if (this.root == null) {
        this.root = node;
        return;
      }
      return node;
    }

    if (value < root.value) {
      root.leftChild = this.insert(root.leftChild, value);
    } else {
      root.rightChild = this.insert(root.rightChild, value);
    }
    root.height = this.height(root);

    root = this.balance(root);
    this.root = root;
    return root;
  };

  balance = (root) => {
    //Dealaing Left Heavy Nodes
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.leftChild) < 0) {
        root.leftChild = this.rotateLeft(root.leftChild);
      }
      return this.rotateRight(root);
    }
    //Dealing Right Heavy Nodes
    if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0) {
        root.rightChild = this.rotateRight(root.rightChild);
      }
      return this.rotateLeft(root);
    }
    return root;
  };

  rotateLeft = (root) => {
    let newRoot = root.rightChild;
    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    root.height = this.height(root);
    newRoot.height = this.height(newRoot);

    return newRoot;
  };

  rotateRight = (root) => {
    let newRoot = root.leftChild;
    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    root.height = this.height(root);
    newRoot.height = this.height(newRoot);

    return newRoot;
  };

  balanceFactor = (root) => {
    if (root == null) {
      return 0;
    }
    return this.height(root.leftChild) - this.height(root.rightChild);
  };

  isLeftHeavy = (root) => {
    return this.balanceFactor(root) > 1;
  };

  isRightHeavy = (root) => {
    return this.balanceFactor(root) < -1;
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

  printAVL = () => {
    console.log(this.root);
  };
}

let avl = new AVLTree();

avl.insert(avl.thisRoot, 10);
avl.insert(avl.thisRoot, 9);
avl.insert(avl.thisRoot, 8);
avl.insert(avl.thisRoot, 1);
avl.insert(avl.thisRoot, 2);
avl.insert(avl.thisRoot, 4);

avl.printAVL();

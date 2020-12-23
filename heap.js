class Heap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  insert = (value) => {
    this.heap[this.size] = value;
    this.size++;

    this.bubbleUpValue();

    console.log(this.heap);
  };

  bubbleUpValue = () => {
    var currentIndex = this.size - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[this.parentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.parentIndex(currentIndex));
      currentIndex = this.parentIndex(currentIndex);
    }
  };

  parentIndex = (index) => {
    if (index % 2 == 0) {
      return (index - 2) / 2; //formula of the parent node from a right Child in a heap
    } else {
      return (index - 1) / 2;
    } //formula of the parent node from a left Child in a heap
  };

  swap = (first, second) => {
    let temp = this.heap[first];
    this.heap[first] = this.heap[second];
    this.heap[second] = temp;
  };

  remove = () => {
    if (this.size == 0) return false;

    this.heap[0] = this.heap[this.size - 1];
    this.size--;

    this.bubbleDownValue();
    console.log(this.heap);
  };

  bubbleDownValue = () => {
    var currentIndex = 0;

    while (currentIndex <= this.size && !this.isValidParent(currentIndex)) {
      let largerChildIndex = this.largerChildIndex(currentIndex);
      this.swap(currentIndex, largerChildIndex);
      currentIndex = largerChildIndex;
    }
  };

  largerChildIndex = (index) => {
    if (!this.hasLeftChild(index)) return index;
    if (!this.hasRightChild(index)) return this.leftChildIndex(index);
    if (this.leftChild(index) > this.rightChild(index)) {
      return this.leftChildIndex(index);
    }
    return this.rightChildIndex(index);
  };

  isValidParent = (index) => {
    if (!this.hasLeftChild(index)) return true;
    if (!this.hasRightChild(index))
      return this.heap[index] >= this.leftChild(index);

    return (
      this.heap[index] >= this.leftChild(index) &&
      this.heap[index] >= this.rightChild(index)
    );
  };

  hasLeftChild = (index) => {
    return this.leftChildIndex(index) <= this.size;
  };

  hasRightChild = (index) => {
    return this.rightChildIndex(index) <= this.size;
  };

  leftChild = (index) => {
    return this.heap[this.leftChildIndex(index)];
  };

  rightChild = (index) => {
    return this.heap[this.rightChildIndex(index)];
  };

  leftChildIndex = (index) => {
    return index * 2 + 1;
  };

  rightChildIndex = (index) => {
    return index * 2 + 2;
  };

  static heapify = (givenArray) => {
    for (let index = 0; index < givenArray.length; index++) {
      Heap.heapifyArray(givenArray, index);
    }
    console.log(givenArray);
  };

  //static methods can access static methods only
  //static methods call other static methods using className itself instead of this

  static heapifyArray = (givenArray, index) => {
    let largerIndex = index;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    if (
      leftIndex < givenArray.length &&
      givenArray[leftIndex] > givenArray[largerIndex]
    ) {
      largerIndex = leftIndex;
    }
    if (
      rightIndex < givenArray.length &&
      givenArray[rightIndex] > givenArray[largerIndex]
    ) {
      largerIndex = rightIndex;
    }

    if (index == largerIndex) return;

    Heap.swapHeapifyElements(givenArray, index, largerIndex);

    Heap.heapifyArray(givenArray, largerIndex);
  };

  static swapHeapifyElements = (array, first, second) => {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  };
}
let heapArray = new Heap();
// heapArray.insert(10);
// heapArray.insert(5);
// heapArray.insert(17);
// heapArray.insert(4);
// heapArray.insert(22);

Heap.heapify([5, 3, 8, 4, 1, 2]);

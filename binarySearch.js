class BinarySearch {
  binarySearchInterration = (item, array) => {
    let left = 0;
    let right = array.length - 1;
    array.sort();

    while (left <= right) {
      let mid = Math.ceil(left + right) / 2;
      if (array[mid] == item) return mid;
      if (item > array[mid]) {
        left = mid + 1;
      } else right = mid - 1;
    }
    return "item not found";
  };

  binarySearchRecurrsion = (item, array) => {
    let left = 0;
    let right = array.length - 1;
    array.sort();

    let itemIndex = this.binarySearchRecurrsionPrivate(
      item,
      array,
      left,
      right
    );
    return itemIndex;
  };

  binarySearchRecurrsionPrivate = (item, array, left, right) => {
    if (right < left) return "item Not Found";

    let mid = Math.ceil((left + right) / 2);
    if (array[mid] == item) return mid;
    if (item > array[mid]) {
      return this.binarySearchRecurrsionPrivate(item, array, mid + 1, right);
    }
    return this.binarySearchRecurrsionPrivate(item, array, left, mid - 1);
  };
}

let obj = new BinarySearch();
console.log(obj.binarySearchInterration(3, [1, 4, 5, 8, 7, 2, 3]));

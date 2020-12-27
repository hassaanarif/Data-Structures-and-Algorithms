class HashMap {
  constructor(hashTableSize) {
    this.hashTablesize = hashTableSize;
    this.hashArray = new Array(hashTableSize);
  }

  hashFunction = (key) => {
    let hash = 83;
    if (key == null) {
      return;
    }
    for (let char of key) {
      hash =
        (12223242526272829 * hash * char.charCodeAt(0)) % this.hashTablesize;
    }
    return hash;
  };

  get = (key) => {
    let index = this.hashFunction(key);
    return this.hashArray[index];
  };

  set = (key, value) => {
    let index = this.hashFunction(key);
    this.hashArray[index] = value;
  };

  contains = (key) => {
    let index = this.hashFunction(key);
    if (this.hashArray[index]) {
      return true;
    } else {
      return false;
    }
  };
}

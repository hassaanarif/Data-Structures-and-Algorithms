class Node {
  constructor(character) {
    this.character = character;
    this.childrenHashTable = {}; //using hashtable instead of array
    this.isEndOfWord = false;
  }
  child = (char) => {
    return this.childrenHashTable[char];
  };
  putChild = (char) => {
    this.childrenHashTable[char] = new Node(char);
  };
  hasChild = (char) => {
    return this.childrenHashTable[char];
  };
  getChildren = () => {
    let result = [];
    for (let char in this.childrenHashTable) {
      result.push(this.childrenHashTable[char]);
    }
    return result;
  };
}

class Trie {
  constructor() {
    this.root = new Node(" ");
  }

  insert = (word) => {
    let current = this.root;
    for (let char of word) {
      if (!current.hasChild(char)) {
        current.putChild(char);
      }
      current = current.child(char);
    }
    current.isEndOfWord = true;
  };

  printTrie = () => {
    console.log(this.root);
  };

  contains = (word) => {
    if (word == null) return false;
    let current = this.root;
    for (let char of word) {
      if (!current.hasChild(char)) {
        return false;
      }
      current = current.child(char);
    }
    return current.isEndOfWord;
  };

  traversePreOrder = (currentNode) => {
    console.log(currentNode.character);

    for (let child of currentNode.getChildren()) {
      this.traversePreOrder(child);
    }
  };

  autoComplete = (prefix) => {
    let autoCompleteArray = [];
    let lastNode = this.findLastNode(prefix);
    this.findWord(lastNode, prefix, autoCompleteArray);
    return autoCompleteArray;
  };

  findWord = (currentNode, prefix, autoCompleteArray) => {
    if (currentNode.isEndOfWord) {
      autoCompleteArray.push(prefix);
    }
    for (let child of currentNode.getChildren()) {
      this.findWord(child, prefix + child.character, autoCompleteArray);
    }
  };

  findLastNode = (prefix) => {
    let current = this.root;
    for (let char of prefix) {
      if (!current.hasChild(char)) {
        return null;
      }
      current = current.child(char);
    }
    return current;
  };
}

let trie = new Trie();
trie.insert("canada");
trie.insert("car");
trie.insert("catch");
trie.insert("candy");
console.log(trie.autoComplete("can"));
// trie.traversePreOrder(trie.root);
// trie.printTrie();
// console.log(trie.contains("canada"));

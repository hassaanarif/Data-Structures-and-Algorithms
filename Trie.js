class Node {
  constructor(character) {
    let alphabetSize = 26;
    this.character = character;
    this.children = new Array(alphabetSize);
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node(" ");
  }

  insert = (word) => {
    let current = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0); // a is stored at [0], b is stored at [1] and so on.....
      if (current.children[index] == null) {
        current.children[index] = new Node(char);
      }
      current = current.children[index];
    }
    current.isEndOfWord = true;
  };

  printTrie = () => {
    console.log(this.root);
  };
}

let trie = new Trie();
trie.insert("cat");
trie.printTrie();

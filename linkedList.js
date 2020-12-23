// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// let node1 = new Node(5);
// let node2 = new Node(6);
// let node3 = new Node(7);

// node1.next = node2;
// node2.next = node3;

// head = node1;

// while (true) {
//   console.log(`${head.data} ->`);
//   if (head.next === null) {
//     console.log("None");
//     break;
//   }
//   head = head.next;
// }

// --------------------------------------------

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  addFirstNode = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  //insert last node
  addLastNode = (data) => {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  };

  //insert node at any place
  addNode = (data, index) => {
    switch (true) {
      case index > this.size + 1:
        console.log(
          `Index is out of range. Index must be in-between 0 and ${
            this.size + 1
          }`
        );
        break;

      case index == 0:
        this.addFirstNode(data);
        break;

      case index == this.size + 1:
        this.addLastNode(data);
        break;

      case index > 0 && index <= this.size:
        let node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
        node.next = current;
        previous.next = node;

        this.size++;
        break;
    }
  };

  //print linked list
  printLinkedList = () => {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.data} -> `;
      current = current.next;
      if (current == null) {
        result += `null`;
      }
    }
    console.log(result);
  };

  toString = () => {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    console.log(array);
    return;
  };

  reverse = () => {
    if (this.size == 0) return;
    else if (this.size == 1) return this.head;
    let current, previous;
    current = this.head;
    previous = null;
    while (current) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    this.head = previous;
  };

  getKthNodeFromEnd = (k) => {
    if (k == 0 || k > this.size) {
      console.log(
        `Invalid value of "k". "k" must be in-between 1 and ${this.size}`
      );
      return;
    }
    let first = this.head;
    let second = this.head;
    for (let i = 0; i < k - 1; i++) {
      second = second.next;
    }
    while (second.next) {
      first = first.next;
      second = second.next;
    }
    console.log(first.data);
    return;
  };
}

var ll = new LinkedList();

ll.addLastNode(10);
ll.addLastNode(20);
ll.addLastNode(30);
ll.addLastNode(40);
ll.addLastNode(50);

ll.toString();
console.log("*******************");
ll.printLinkedList();
console.log("*******************");
ll.getKthNodeFromEnd(3);

ll.reverse();

ll.printLinkedList();
console.log("*******************");
ll.toString();
console.log("*******************");

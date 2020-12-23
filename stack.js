class Stack {
  constructor(size) {
    this.array = new Array(size);
    this.length = 0;
  }

  push = (data) => {
    if (!data) {
      console.log("Invalid Argument");
      return;
    }
    if (this.length == this.array.length) {
      console.log("Stack Overflow");
      return;
    }
    this.array[this.length] = data;
    console.log(this.array);
    this.length++;
  };

  pop = () => {
    if (this.length == 0) {
      console.log("Cannot pop from empty stack");
      return;
    }
    --this.length;
    let x = this.array[this.length];
    delete this.array[this.length];
    console.log(x);
    console.log(this.array);
    return x;
  };

  printStack = () => {
    console.log(this.array);
  };

  peek = () => {
    if (this.length == 0) {
      console.log("Stack is Empty");
      return;
    }
    console.log(this.array[this.length - 1]);
  };
}

stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.peek();

class Queue {
  constructor(size) {
    this.array = new Array(size);
    this.length = 0;
    this.rear = 0;
    this.front = 0;
  }

  enqueue = (data) => {
    if (!data) {
      console.log("Invalid Argument");
      return;
    }
    if (this.length == this.array.length) {
      console.log("Queue is Full");
      return;
    }
    this.array[this.rear] = data;
    this.rear = (this.rear + 1) % 5; //circular queue implemention
    this.length++;
    console.log(this.array);
  };

  dequeue = () => {
    if (this.length == 0) {
      console.log("Queue is empty");
      return;
    }
    let x = this.array[this.front];
    delete this.array[this.front];
    this.front = (this.front + 1) % 5; //circular queue implemention
    this.length--;
    console.log(x);
    console.log(this.array);
    return x;
  };
}

let queue = new Queue(5);

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.enqueue(40);

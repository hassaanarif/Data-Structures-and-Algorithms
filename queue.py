class Queue:
    def __init__(self, size):
        self.front = 0
        self.rear = 0
        self.length = 0
        self.array = [None] * size
    
    def enqueue(self, data = None):
        if data == None:
            print("Argument shouldn't be empty")
            return
        if self.length == len(self.array):
            print("Queue is full")
            return
        self.array[self.rear] =  data
        self.rear = (self.rear + 1) % 5 #circular queue implemention
        self.length += 1
        print(self.array)

    def dequeue(self):
        if self.length == 0:
            print("Queue is empty")
            return
        x = self.array[self.front]
        self.array[self.front] = None
        self.front = (self.front + 1) % 5 #circular queue implemention
        self.length -= 1
        print(x)
        print(self.array)


queue = Queue(5)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.dequeue()
queue.enqueue(5)
queue.enqueue(6)
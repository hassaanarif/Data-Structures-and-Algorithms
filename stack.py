class Stack:
    def __init__(self, size):
        self.array = [None] * size
        self.length = 0
    
    def push(self, data = None):
        if data == None:
            print("Argument shouldn't be empty")
            return
        if self.length == len(self.array):
            print ("Stack Overflow")
            return
        self.array[self.length] = data
        print(self.array)
        self.length += 1

    def pop(self):
        if self.length == 0:
            print("Cannot pop from empty stack")
            return
        self.length -= 1
        x = self.array[self.length]
        self.array[self.length] = None
        print(x)
        print(self.array)
        return self.array[self.length]

    def print_stack(self):
        print (self.array)

    def peek(self):
        if self.length == 0:
            print("Stack is Empty")
            return
        print (self.array[self.length - 1])


stack = Stack(5)

stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()
stack.peek()



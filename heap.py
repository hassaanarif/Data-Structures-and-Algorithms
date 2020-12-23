class Heap:
    def __init__(self):
        self.heap = []
        self.size = 0

    def insert(self, value):
        self.heap.append(value)
        self.size += 1

        self.bubbleUpValue()

        print(self.heap)
    
    def bubbleUpValue(self):
        currentIndex = self.size - 1
        
        while currentIndex > 0 and self.heap[currentIndex] > self.heap[self.parentIndex(currentIndex)]:
            self.swap(currentIndex, self.parentIndex(currentIndex))
            currentIndex =  self.parentIndex(currentIndex)
            
    def swap(self, first, second):
        temp = self.heap[first]
        self.heap[first] = self.heap[second]
        self.heap[second] = temp

    def parentIndex(self, index):
        if index % 2 == 0:
            return (index - 2) / 2
        else:
            return (index - 1) / 2

    def remove(self):
        if self.size == 0:
            return False

        self.heap[0] = self.heap[self.size - 1]
        self.size -= 1

        self.bubbleDownValue()
        print(self.heap)

    def bubbleDownValue(self):
        currentIndex = 0

        while currentIndex <= self.size and not self.isValidParent(currentIndex):
            largerChildIndex = self.largerChildIndex(currentIndex)
            self.swap(currentIndex, largerChildIndex)
            currentIndex = largerChildIndex

    def isValidParent(self, index):
        if (not self.hasLeftChild(index)):
            return True

        if (not self.hasRightChild(index)):
            return (self.heap[index] >= self.leftChild(index))

        return (self.heap[index] >= self.leftChild(index) and 
        self.heap[index] >= self.rightChild(index))

    def largerChildIndex(self,index):
        if (not self.hasLeftChild(index)):
            return index

        if (not self.hasRightChild(index)):
            return self.leftChildIndex(index)

        if self.leftChild(index) > self.rightChild(index):
            return self.leftChildIndex(index)
        return self.rightChildIndex(index)

    def hasLeftChild(self, index):
        return self.leftChildIndex(index) <= self.size

    def hasRightChild(self, index):
        return self.rightChildIndex(index) <= self.size

    def leftChild(self, index):
        return self.heap[self.leftChildIndex(index)]

    def rightChild(self, index):
        return self.heap[self.rightChildIndex(index)]

    def leftChildIndex(self, index):
        return index * 2 + 1

    def rightChildIndex(self, index):
        return index * 2 + 2
            
    @classmethod
    def heapify(cls, givenArray):
        for index in range(len(givenArray)):
            cls.heapifyArray(givenArray, index)
        print(givenArray)
 
#   static methods can access static methods only
#   static methods call other static methods using className itself instead of self

    @classmethod
    def heapifyArray(cls, givenArray, index):
        largerIndex = index
        leftIndex = (index * 2) + 1
        rightIndex = (index * 2) + 2

        if leftIndex < len(givenArray) and givenArray[leftIndex] > givenArray[largerIndex]:
            largerIndex = leftIndex

        if rightIndex < len(givenArray) and givenArray[rightIndex] > givenArray[largerIndex]:
            largerIndex = rightIndex

        if largerIndex == index:
            return

        cls.swapHeapifyArray(givenArray, index, largerIndex)

        cls.heapifyArray(givenArray, largerIndex)

    @classmethod
    def swapHeapifyArray(cls, givenArray, index, largerIndex):
        temp = givenArray[index]
        givenArray[index] =  givenArray[largerIndex]
        givenArray[largerIndex] = temp

heap = Heap()
# heap.insert(10)
# heap.insert(5)
# heap.insert(17)
# heap.insert(4)
# heap.insert(22)

Heap.heapify([5,3,8,4,1,2])
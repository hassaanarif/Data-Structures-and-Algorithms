class Node:
    def __init__(self, value, leftChild = None, rightChild = None):
        self.value = value
        self.leftChild = leftChild
        self.rightChild = rightChild
    

class BinarySearchTree:
    def __init__(self):
        self.root = None
        self.result = []

    def returnRoot(self):
        return self.root
    
    def insert(self, value):
        node = Node(value)

        if self.root == None:
            self.root = node
            return
        
        current = self.root
        while True:
            if value < current.value:
                if current.leftChild == None:
                    current.leftChild = node
                    break
                current = current.leftChild
            else:
                if current.rightChild == None:
                    current.rightChild = node
                    break
                current = current.rightChild

    def find(self, value):
        current = self.root

        while current is not None:
            if value < current.value:
                current = current.leftChild
            elif value > current.value:
                current = current.rightChild
            else:
                print("True")
                return
        print("False") 
        return 

    def traversePreOrder(self, root):
        if root == None:
            return
        print(root.value)
        self.traversePreOrder(root.leftChild)
        self.traversePreOrder(root.rightChild)

    def traverseInOrder(self, root):
        if root == None:
            return
        self.traverseInOrder(root.leftChild)
        print(root.value)
        self.traverseInOrder(root.rightChild)

    def traversePostOrder(self, root):
        if root == None:
            return
        self.traversePostOrder(root.leftChild)
        self.traversePostOrder(root.rightChild)
        print(root.value)

    def height(self, root):
        if root == None:
            return -1
        if root.leftChild == None and root.rightChild == None:
            return 0
        return (1 + max(self.height(root.leftChild), self.height(root.rightChild)))
        
    def equals(self, first, second):
        if first == None and second == None:
            return True
        elif first != None and second != None:
            return (first.value == second.value and self.equals(first.leftChild, second.leftChild) and self.equals(first.rightChild, second.rightChild))
        return False

    def minimunValueInBST(self, root):
        if root == None:
            return
        current = root
        while current.leftChild:
            current = current.leftChild
        print(current.value)
    
    def printBST(self):
        print(self.root)

    def minimunValueInBT(self, root):
        if root == None:
            return
        if root.leftChild == None and root.rightChild == None:
            return root.value
        left = self.minimunValueInBT(root.leftChild)
        right = self.minimunValueInBT(root.rightChild)
        if left and right:
            return min(min(left,right), root.value)
        return min(left or right, root.value)

    def isBinarySearchTree(self, root, minimum = -10000, maximum= 10000):
        if root == None:
            return True
        if root.value < minimum or root.value > maximum:
            return False
        return (self.isBinarySearchTree(root.leftChild, minimum, root.value - 1) and self.isBinarySearchTree(root.rightChild, root.value + 1, maximum))

    def getNodeAtDistance(self, root, distance):
        if root == None:
            return
        if distance == 0:
            self.result.append(root.value)
            return
        self.getNodeAtDistance(root.leftChild, distance - 1)
        self.getNodeAtDistance(root.rightChild, distance - 1)
        return self.result

    def traverseLevelOrder(self, root):
        for i in range(self.height(root) + 1):
            x = (self.getNodeAtDistance(root, i))
        print(x)

firstTree = BinarySearchTree()

firstTree.insert(7)
firstTree.insert(4)
firstTree.insert(9)
firstTree.insert(1)
firstTree.insert(6)
firstTree.insert(8)
firstTree.insert(10)
firstTree.insert(5)

secondTree = BinarySearchTree()

secondTree.insert(7)
secondTree.insert(4)
secondTree.insert(9)
secondTree.insert(1)
secondTree.insert(6)
secondTree.insert(8)
secondTree.insert(10)
secondTree.insert(5)



print(firstTree.getNodeAtDistance(firstTree.returnRoot(), 2))




# bst.traversePreOrder(bst.returnRoot())
# print("************")
# bst.traverseInOrder(bst.returnRoot())
# print("************")
# bst.traversePostOrder(bst.returnRoot())
# print("************")
class Node:
    def __init__(self, value):
        self.value = value
        self.leftChild = None
        self.rightChild = None
        self.height = None


class AVLTree:
    def __init__(self):
        self.root = None

    def returnRoot(self):
        return self.root

    def insert(self,root, value):
        if root == None:
            node = Node(value)
            if self.root == None:
                self.root = node
                return
            return node

        if value < root.value:
            root.leftChild = self.insert(root.leftChild, value)
        else:
            root.rightChild = self.insert(root.rightChild, value)

        root.height = self.height(root)

        root = self.balance(root)
        self.root = root
        return root

    def balance(self, root):
        if self.isLeftHeavy(root):
            if  self.balanceFactor(root) < 0:
                root.leftChild = self.rotateLeft(root.rightChild)
            return self.rotateRight(root)

        if self.isRightHeavy(root):
            if  self.balanceFactor(root) > 0:
                root.rightChild = self.rotateRight(root.rightChild)
            return self.rotateLeft(root)

        return root

    def rotateLeft(self,root):
        newRoot = root.rightChild
        root.rightChild =  newRoot.leftChild
        newRoot.rightChild = root 

        root.height = self.height(root)
        newRoot.height = self.height(newRoot)
        return newRoot

    def rotateRight(self,root):
        newRoot = root.leftChild
        root.leftChild =  newRoot.rightChild
        newRoot.rightChild = root

        root.height = self.height(root)
        newRoot.height = self.height(newRoot)
        return newRoot

    def isLeftHeavy(self,root):
        return self.balanceFactor(root) > 1

    def isRightHeavy(self, root):
        return self.balanceFactor(root) < -1

    def balanceFactor(self, root):
        if root == None:
            return 0
        return self.height(root.leftChild) - self.height(root.rightChild)

    def height(self, root):
        if root == None:
            return -1
        if root.leftChild == None and root.rightChild == None:
            return 0
        return (1 + max(self.height(root.leftChild), self.height(root.rightChild)))

    def printAVL(self):
        print(self.root)

avl = AVLTree()

avl.insert(avl.returnRoot(), 5)
avl.insert(avl.returnRoot(), 1)
avl.insert(avl.returnRoot(), 2)
avl.insert(avl.returnRoot(), 3)
avl.insert(avl.returnRoot(), 9)
avl.insert(avl.returnRoot(), 8)

avl.printAVL()
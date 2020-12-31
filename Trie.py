class Node:
    def __init__(self, character):
        self.character = character
        self.childrenHashTable = {} #using hashtable instead of array
        self.isEndOfWord = False

    def __repr__(self):
        reprResult = "Node {}".format(self.character)
        return reprResult
    

    def child(self, char):
        return self.childrenHashTable.get(char)

    def putChild(self, char):
        self.childrenHashTable.update({char: Node(char)})

    def hasChild(self, char):
        return self.childrenHashTable.get(char)

    def getChildren(self):
        result = []
        for child in self.childrenHashTable:
            result.append(self.childrenHashTable[child])
        return result

class Trie:
    def __init__(self):
        self.root = Node(" ")

    def __repr__(self):
        return "Trie"
    
    def insert(self, word):
        current = self.root
        for char in word:
            if not current.hasChild(char):
                current.putChild(char)
            current = current.child(char)
        current.isEndOfWord = True

    def printTrie(self):
        print(self.root)


    def contains(self, word):
        if word == None:
            return False
        current = self.root
        for char in word:
            if not current.hasChild(char):
                return False
            current = current.child(char)
        return current.isEndOfWord


    def traversePreOrder(self, currentNode):
        print(currentNode.character)
        for child in currentNode.getChildren():
            self.traversePreOrder(child)

    def autoComplete(self, prefix):
        autoCompleteArray = []
        lastNode = self.findLastNode(prefix)
        self.findWord(lastNode, prefix, autoCompleteArray)
        return autoCompleteArray

    def findLastNode(self, prefix):
        current = self.root
        for char in prefix:
            if not current.hasChild(char):
                return None
            current = current.child(char)
        return current

    def findWord(self, currentNode, prefix, autoCompleteArray):
        if currentNode.isEndOfWord:
            autoCompleteArray.append(prefix)
        
        for child in currentNode.getChildren():
            self.findWord(child, prefix + child.character, autoCompleteArray)

trie = Trie()

trie.insert("canada")
trie.insert("candy")
trie.insert("car")
trie.insert("catch")
trie.insert("card")
print(trie.autoComplete("ca"))
# trie.traversePreOrder(trie.root)
#print(trie.contains("can"))
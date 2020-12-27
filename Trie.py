class Node:
    def __init__(self, character):
        alphabetSize = 26
        self.character = character
        self.children = [None] * alphabetSize
        self.isEndOfWord = False

class Trie:
    def __init__(self):
        self.root = Node(" ")
    
    def insert(self, word):
        current = self.root
        for char in word:
            index = ord(char) - ord("a")
            if current.children[index] == None:
                current.children[index] = Node(char)
            current = current.children[index]
        current.isEndOfWord = True

    def printTrie(self):
        print(self.root)

trie = Trie()

trie.insert("cat")
trie.printTrie()
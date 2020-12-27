class HashMap:
    def __init__(self, hashTableSize):
        self.hashTableSize = hashTableSize
        self.hashTable = [None] * hashTableSize


    def hashFunction(self, key):
        hashValue = 83
        if key == None:
            return

        for char in key:
            hashValue = (12223242526272829 * hashValue * ord(char)) % self.hashTableSize

        return hashValue

    def setValue(self, key, value):
        index = self.hashFunction(key)
        self.hashTable[index] = value
    
    def getValue(self, key, value):
        index = self.hashFunction(key)
        return self.hashTable[index]

    def contains(self, key):
        index = self.hashFunction(key)
        if self.hashTable[index]:
            return True
        else:
            return False

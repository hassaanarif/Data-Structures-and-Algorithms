# class Node:
#     def __init__(self, data = None, nextNode=None):
#         self.data =  data
#         self.nextNode = nextNode

# node1 = Node(3)
# node2 = Node(5)
# node3 = Node(7)

# node1.nextNode = node2
# node2.nextNode = node3

# head = node1
# while True:
#     print head.data, "->",
#     if head.nextNode is None:
#         print "None"
#         break
#     head = head.nextNode

#  -------------------------------------------------

class Node:
    def __init__(self, data, next_node= None):
        self.data =  data
        self.next_node = next_node


class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def add_first_node (self, data):  
        self.head = Node(data, self.head)
        self.size += 1

    def add_last_node (self,data):
        node = Node(data)
        current = None
        if not self.head:
            self.head = node
            self.size +=1
        else:
            current = self.head
            while current.next_node:
                current = current.next_node
            current.next_node = node
        self.size += 1
    
    def add_node (self, data, index):
        if index == 0:
            self.add_first_node(data)
            return
        if index > self.size + 1:
            print("Index is out of range. Index must be in-between 0 and {}".format(self.size))
            return
        if index == self.size + 1:
            self.add_last_node(data)
            return
        if index > 0 and index <= self.size:
            node = Node(data)
            previous = None
            count = 0
            current = self.head
            while count < index:
                previous = current
                current = current.next_node
                count += 1
            node.next_node = current
            previous.next_node = node
            self.size += 1
            return

    def print_linked_list (self):
        current = self.head
        while current:
            print ("{} ->".format(current.data)),
            current = current.next_node
            if current == None:
                print ("None")
            
    def to_string(self):
        array = []
        current = self.head
        while current:
            array.append(current.data)
            current = current.next_node
        print (array)
        return
        
    def reverse(self):
        if self.size == 0:
            return
        elif self.size == 1:
            return self.head
        else:
            current = self.head
            previous = None
            while (current):
                temp = current.next_node
                current.next_node =  previous
                previous =  current
                current = temp
            self.head = previous

    def get_kth_node_from_end(self, k):
        if k == 0 or k > self.size:
            print('Invalid value of "k". "k" must be in-between 1 and {}'.format(self.size))
            return
        first = self.head
        second = self.head
        for _ in range(k-1): #using _ instead of i because i was not used in the loop and VSCODE was giving a warning of unused variable i
            second = second.next_node
        while second.next_node:
            first = first.next_node
            second = second.next_node
        print (first.data)
        return


ll = LinkedList()

ll.add_last_node(10)
ll.add_last_node(20)
ll.add_last_node(30)
ll.add_last_node(40)
ll.add_last_node(50)


ll.to_string()
print ("***********************")
ll.print_linked_list()
print ("***********************")
ll.get_kth_node_from_end(3)

ll.reverse()

ll.print_linked_list()
print ("***********************")
ll.to_string()
print ("***********************")
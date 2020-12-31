class Node:
    def __init__(self, nodeName):
        self.nodeName =  nodeName
    def __repr__(self):
        reprResult = "Node {}".format(self.nodeName)
        return reprResult
    
class Graph:
    def __init__(self):
        self.nodesHashMap = {}
        self.adjacencyHashMap = {}
    def __repr__(self):
        return "Graph"

    def isNodePresent(self, nodeName):
        return self.nodesHashMap.get(nodeName)
    
    def addNode(self, nodeName):
        if self.isNodePresent(nodeName):
            return
        else:
            self.nodesHashMap.update({nodeName: Node(nodeName)})
            adjacencyList = []
            self.adjacencyHashMap.update({nodeName: adjacencyList})

    def addEdge(self, fromNode, toNode):
        if not (self.isNodePresent(fromNode) and self.isNodePresent(toNode)):
            return
        
        self.adjacencyHashMap.get(fromNode).append(self.nodesHashMap.get(toNode))

    def removeNode(self, nodeName):
        if not self.isNodePresent(nodeName):
            return

        for node in self.adjacencyHashMap:
            if nodeName in self.adjacencyHashMap[node]:
                self.adjacencyHashMap[node].remove(nodeName)
        
        del self.adjacencyHashMap[nodeName]
        del self.nodesHashMap[nodeName]

    def removeEdge(self, fromNode, toNode):
        if not (self.isNodePresent(fromNode) and self.isNodePresent(toNode)):
            return
        
        if toNode in self.adjacencyHashMap[fromNode]:
                self.adjacencyHashMap[fromNode].remove(toNode)

    def inDepthTraversal(self, nodeName):
        if not self.isNodePresent(nodeName):
            return
        visitedSet = set()
        self.inDepthTraversePrivate(self.nodesHashMap.get(nodeName), visitedSet)

    def inDepthTraversePrivate(self, nodeName, visitedSet):
        print(nodeName)
        visitedSet.add(nodeName)

        for node in self.adjacencyHashMap[nodeName.nodeName]:
            if not node in visitedSet:
                self.inDepthTraversePrivate(node, visitedSet)

    def inDepthTraversalUsingIteration(self, nodeName):
        if not self.isNodePresent(nodeName):
            return
        visitedSet = set()
        stack = [] #stack is used to implement in-depth traversal
        stack.append(self.nodesHashMap[nodeName])
        while len(stack) != 0:
            current = stack.pop()
            if current in visitedSet:
                continue
            print(current)
            visitedSet.add(current)

            for node in self.adjacencyHashMap[current.nodeName]:
                if not node in visitedSet:
                    stack.append(node)

    def breadthTraversalUsingIteration(self, nodeName):
        if not self.isNodePresent(nodeName):
            return
        visitedSet = set()
        queue = [] #queue is used to implement in-depth traversal
        queue.append(self.nodesHashMap[nodeName])
        while len(queue) != 0:
            current = queue.pop(0)
            if current in visitedSet:
                continue
            print(current)
            visitedSet.add(current)

            for node in self.adjacencyHashMap[current.nodeName]:
                if not node in visitedSet:
                    queue.append(node)
    
    def cycleDetectionPublic(self):
        visitedSet = set()
        visitingSet =  set()
        allSet = set()
        for node in self.nodesHashMap:
            allSet.add(self.nodesHashMap[node])

        while len(allSet) != 0:
            current = (next(iter(allSet))) #returning first item from a set
            if (self.cycleDetectionPrivate(current, allSet, visitingSet, visitedSet)):
                return True
            
        return False

    def cycleDetectionPrivate(self, node, allSet, visitingSet, visitedSet):
        allSet.remove(node)
        visitingSet.add(node)

        for neighbour in self.adjacencyHashMap[node.nodeName]:
            if neighbour in visitedSet:
                continue
            if neighbour in visitingSet:
                return True

            if (self.cycleDetectionPrivate(neighbour, allSet, visitingSet, visitedSet)):
                return True

        visitingSet.remove(node)
        visitedSet.add(node)

        return False



graph = Graph()
graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addEdge("A", "B")
graph.addEdge("B", "D")
graph.addEdge("D", "C")
graph.addEdge("A", "C")

# print(graph.nodesHashMap)
print(graph.cycleDetectionPublic())
# graph.inDepthTraversalUsingIteration("A")
# graph.inDepthTraversal("C")

# <__main__.Node instance at 0x108edbbd8> -> A
# <__main__.Node instance at 0x108edbc20> -> B
# <__main__.Node instance at 0x108edbc68> -> C
# <__main__.Node instance at 0x108edbcb0> -> D
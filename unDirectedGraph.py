class Node:
    def __init__(self, nodeName):
        self.nodeName =  nodeName
    def __repr__(self):
        reprResult = "Node {{nodeName: {}}}".format(self.nodeName)
        return reprResult

class Edge:
    def __init__(self, fromNode, toNode, weight):
        self.fromNode = fromNode
        self.toNode =  toNode
        self.weight =  weight
    def __repr__(self):
        reprResult = "Edge {{fromNode: {}, toNode: {}, weight: {}}}".format(self.fromNode, self.toNode, self.weight)
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
            self.nodesHashMap.update({nodeName: Node(nodeName)}) # {"A" : NodeA}
            adjacencyList = []
            self.adjacencyHashMap.update({nodeName: adjacencyList}) # {NodeA : []}

    def addEdge(self, fromNode, toNode, weight):
        if not (self.isNodePresent(fromNode) and self.isNodePresent(toNode)):
            return
        
        self.adjacencyHashMap.get(fromNode).append(Edge(self.nodesHashMap[fromNode], self.nodesHashMap[toNode], weight)) # {Node A : [EdgeAB, ...]}
        self.adjacencyHashMap.get(toNode).append(Edge(self.nodesHashMap[toNode], self.nodesHashMap[fromNode], weight)) # {Node B : [EdgeBA, ...]}

    def cycleDetectionPublic(self):
        visitedSet = set()
        for node in self.nodesHashMap:
            if not self.nodesHashMap[node] in visitedSet and self.cycleDetectionPrivate(self.nodesHashMap[node], None, visitedSet):
                return True

        return False

    def cycleDetectionPrivate(self, node, parent, visitedSet):
        visitedSet.add(node)

        for neighbour in self.adjacencyHashMap[node.nodeName]:
            if neighbour.toNode == parent:
                continue
            if neighbour.toNode in visitedSet or (self.cycleDetectionPrivate(neighbour.toNode, node, visitedSet)):
                return True
        
        return False 


udGraph = Graph()
udGraph.addNode("B")
udGraph.addNode("A")
udGraph.addNode("C")
udGraph.addNode("D")
udGraph.addEdge("A", "B", 5)
udGraph.addEdge("B", "D", 1)
udGraph.addEdge("D", "C", 10)
udGraph.addEdge("A", "C", 3)

print(udGraph.cycleDetectionPublic())
# print(udGraph.adjacencyHashMap["A"])
# print(udGraph.nodesHashMap)
# print(udGraph.adjacencyHashMap["A"])
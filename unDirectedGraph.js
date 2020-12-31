class Node {
  constructor(nodeName) {
    this.nodeName = nodeName;
  }
}

class Edge {
  constructor(fromNode, toNode, weight) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.nodesHashMap = {};
    this.adjacencyHashMap = {};
  }

  isNodePresent = (nodeName) => {
    return this.nodesHashMap[nodeName];
  };

  isNodePresentInAdjacencyList = (nodeName) => {
    return this.adjacencyHashMap[nodeName];
  };

  addNode = (nodeName) => {
    if (this.isNodePresent(nodeName)) return;
    else {
      this.nodesHashMap[nodeName] = new Node(nodeName); // {"A" : NodeA}
      let adjacencyList = [];
      this.adjacencyHashMap[nodeName] = adjacencyList; // {NodeA : []}
    }
  };

  addEdge = (fromNode, toNode, weight) => {
    if (!(this.isNodePresent(fromNode) && this.isNodePresent(toNode))) return;

    this.adjacencyHashMap[fromNode].push(
      new Edge(this.nodesHashMap[fromNode], this.nodesHashMap[toNode], weight)
    ); // {NodeA : [EdgeAB, ...]}

    this.adjacencyHashMap[toNode].push(
      new Edge(this.nodesHashMap[toNode], this.nodesHashMap[fromNode], weight)
    ); // {NodeB : [EdgeBA, ...]}
  };

  cycleDetectionPublic = () => {
    let visitedSet = new Set();
    for (let node in this.nodesHashMap) {
      if (
        !visitedSet.has(this.nodesHashMap[node]) &&
        this.cycleDetectionPrivate(this.nodesHashMap[node], null, visitedSet)
      )
        return true;
    }
    return false;
  };

  cycleDetectionPrivate = (node, parent, visitedSet) => {
    visitedSet.add(node);

    for (let neighbour of this.adjacencyHashMap[node.nodeName]) {
      if (neighbour.toNode == parent) continue;
      if (
        visitedSet.has(neighbour.toNode) ||
        this.cycleDetectionPrivate(neighbour.toNode, node, visitedSet)
      )
        return true;
    }
    return false;
  };
}

let udGraph = new Graph();
udGraph.addNode("B");
udGraph.addNode("A");
udGraph.addNode("C");
udGraph.addNode("D");
udGraph.addEdge("A", "B", 2);
udGraph.addEdge("B", "D", 5);
udGraph.addEdge("D", "C", 10);
// udGraph.addEdge("C", "A", 1);

console.log(udGraph.adjacencyHashMap["A"]);
// console.log(udGraph.nodesHashMap);
// console.log(udGraph.cycleDetectionPublic());

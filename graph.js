class Node {
  constructor(nodeName) {
    this.nodeName = nodeName;
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
      this.nodesHashMap[nodeName] = new Node(nodeName);
      let adjacencyList = [];
      this.adjacencyHashMap[nodeName] = adjacencyList;
    }
  };

  addEdge = (fromNode, toNode) => {
    if (!(this.isNodePresent(fromNode) && this.isNodePresent(toNode))) return;

    this.adjacencyHashMap[fromNode].push(this.nodesHashMap[toNode]);
  };

  removeNode = (nodeName) => {
    if (!this.isNodePresent(nodeName)) return;

    for (let node in this.adjacencyHashMap) {
      let indexOfNode = this.adjacencyHashMap[node].indexOf(nodeName);
      if (indexOfNode == -1) continue;
      this.adjacencyHashMap[node].splice(indexOfNode, 1);
    }
    delete this.adjacencyHashMap[nodeName];
    delete this.nodesHashMap[nodeName];
  };

  removeEdge = (fromNode, toNode) => {
    if (!(this.isNodePresent(fromNode) && this.isNodePresent(toNode))) return;

    let indexOfToNode = this.adjacencyHashMap[fromNode].indexOf(toNode);
    if (indexOfToNode == -1) return;
    this.adjacencyHashMap[fromNode].splice(indexOfToNode, 1);
  };

  inDepthTraverse = (nodeName) => {
    if (!this.isNodePresent(nodeName)) return;
    let visitedSet = new Set();
    this.inDepthTraversePrivate(this.nodesHashMap[nodeName], visitedSet);
  };

  inDepthTraversePrivate = (nodeName, visitedSet) => {
    console.log(nodeName);
    visitedSet.add(nodeName);
    for (let node of this.adjacencyHashMap[nodeName.nodeName]) {
      if (!visitedSet.has(node)) {
        this.inDepthTraversePrivate(node, visitedSet);
      }
    }
  };

  inDepthTraverseUsingIteration = (nodeName) => {
    if (!this.isNodePresent(nodeName)) return;

    let stack = []; //stack is used to implement breadth traversal
    let visitedSet = new Set();
    stack.push(this.nodesHashMap[nodeName]);
    while (stack.length != 0) {
      let current = stack.pop();
      if (visitedSet.has(current)) {
        continue;
      }
      console.log(current);
      visitedSet.add(current);

      for (let node of this.adjacencyHashMap[current.nodeName]) {
        if (!visitedSet.has(node)) {
          stack.push(node);
        }
      }
    }
  };

  breadthTraverseUsingIteration = (nodeName) => {
    if (!this.isNodePresent(nodeName)) return;

    let queue = []; //queue is used to implement breadth traversal
    let visitedSet = new Set();
    queue.push(this.nodesHashMap[nodeName]);
    while (queue.length != 0) {
      let current = queue.shift();
      if (visitedSet.has(current)) {
        continue;
      }
      console.log(current);
      visitedSet.add(current);

      for (let node of this.adjacencyHashMap[current.nodeName]) {
        if (!visitedSet.has(node)) {
          queue.push(node);
        }
      }
    }
  };

  cycleDetectionPublic = () => {
    let allSet = new Set();
    for (let node in this.nodesHashMap) {
      allSet.add(this.nodesHashMap[node]);
    }
    let visitingSet = new Set();
    let visitedSet = new Set();

    while (allSet.size != 0) {
      let current = allSet.entries().next().value[0]; //returning first item from the set

      if (this.cycleDetectionPrivate(current, allSet, visitingSet, visitedSet))
        return true;
    }
    return false;
  };
  cycleDetectionPrivate = (node, allSet, visitingSet, visitedSet) => {
    allSet.delete(node);
    visitingSet.add(node);

    for (let neighbour of this.adjacencyHashMap[node.nodeName]) {
      if (visitedSet.has(neighbour)) continue;
      if (visitingSet.has(neighbour)) return true;

      if (
        this.cycleDetectionPrivate(neighbour, allSet, visitingSet, visitedSet)
      )
        return true;
    }
    visitingSet.delete(node);
    visitedSet.add(node);

    return false;
  };
}

let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("D", "C");
graph.addEdge("C", "A");

console.log(graph.cycleDetectionPublic());
// console.log(graph.adjacencyHashMap);
// graph.breadthTraverseUsingIteration("A");

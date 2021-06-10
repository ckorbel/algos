class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // undirected graph
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }
}

const myG = new WeightedGraph();
myG.addVertex("a");
myG.addVertex("b");
myG.addVertex("c");
myG.addVertex("d");
myG.addVertex("e");
myG.addVertex("f");
console.log(myG.adjacencyList);
myG.addEdge("a", "b", 4);
myG.addEdge("a", "c", 2);
myG.addEdge("b", "e", 3);
myG.addEdge("c", "d", 2);
myG.addEdge("b", "f", 3);
myG.addEdge("d", "e", 3);
myG.addEdge("d", "f", 1);
myG.addEdge("c", "f", 4);
myG.addEdge("e", "f", 1);
console.log(myG.adjacencyList);

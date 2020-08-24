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
console.log(myG.adjacencyList);
myG.addEdge("a", "b", 9);
myG.addEdge("a", "c", 5);
myG.addEdge("b", "c", 7);
console.log(myG.adjacencyList);

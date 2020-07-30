//Undirected graph
//Adjancy List (instead of adjaceny matrix)
class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (vertex in this.adjacenyList) {
      return "key already exists";
    }
    this.adjacenyList[vertex] = [];
  }

  // unweighted & undirected edge
  // add edge to both keys because its undirected
  // if it was directed you would add to only one
  addEdges(v1, v2) {
    // make sure vertex exists
    if (v1 in this.adjacenyList && v2 in this.adjacenyList) {
      this.adjacenyList[v1].push(v2);
      this.adjacenyList[v2].push(v1);
    } else {
      return "vertex key not recognized";
    }
  }

  removeEdge(vertex1, vertex2) {
    // remove both since undirect edge
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // includes removing all edges of that vertex
  removeVertex(vertex) {
    if (vertex in this.adjacenyList) {
      let count = 0;
      const savedValues = this.adjacenyList[vertex];
      for (let i = 0; i < savedValues.length; i++) {
        let adjacentVertex = savedValues[i];
        this.removeEdge(adjacentVertex, vertex);
      }
      delete this.adjacenyList[vertex];
    } else {
      return "vertex key not recognized";
    }
  }
}

const newGraph = new Graph();
newGraph.addVertex("San Jose");
newGraph.addVertex("LA");
newGraph.addVertex("Dallas");
newGraph.addVertex("Hong Kong");
newGraph.addVertex("Aspen");
console.log(newGraph.adjacenyList);
newGraph.addEdges("San Jose", "LA");
newGraph.addEdges("LA", "Hong Kong");
newGraph.addEdges("San Jose", "Hong Kong");
console.log(newGraph.adjacenyList);
newGraph.removeVertex("LA");
console.log(newGraph.adjacenyList);
// newGraph.removeEdge('LA', 'San Jose');
// console.log(newGraph.adjacenyList);
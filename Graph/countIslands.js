function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

function numberOfIslands(graph) {
  let numberOfIslands = 0;
  const visited = new Set();

  for (const node in graph) {
    if (explore(graph, node, visited)) {
      numberOfIslands++;
    }
  }

  return numberOfIslands;
}

function explore(graph, currentNode, visited) {
  if (visited.has(currentNode)) return false;

  visited.add(currentNode);

  for (const neighbor of graph[currentNode]) {
    explore(graph, neighbor, visited);
  }
  return true;
}

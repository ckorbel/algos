interface UnDirectedGraph {
  [key: string]: string[];
}

const buildGraph = (edges: string[][]): UnDirectedGraph => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const shortestPath = (
  edges: string[][],
  nodeA: string,
  nodeB: string
): number => {
  const graph: UnDirectedGraph = buildGraph(edges);
  const queue = [[nodeA, 0]];
  const visited = new Set([nodeA]);
  while (queue.length) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance as number;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, Number(distance) + 1]);
      }
    }
  }
  return -1;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

shortestPath(edges, "w", "z");

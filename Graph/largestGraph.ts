const exploreSize = (graph, current, visited) => {
  if (visited.has(current)) return 0;

  let size = 1;
  visited.add(current);

  for (let neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
};

const largestComponent = (graph) => {
  // todo
  let largestIsland = 0;
  const visited = new Set();
  for (let node in graph) {
    largestIsland = Math.max(exploreSize(graph, node, visited), largestIsland);
  }

  return largestIsland;
};

largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}); // -> 4

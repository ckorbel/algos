interface UnDirectedGraph {
  [key: string]: string[];
}

const unDirectedGraph: UnDirectedGraph = {
  i: ["j", "k"],
  j: ["i"],
  k: ["i", "m", "l"],
  m: ["k"],
  l: ["k"],
  o: ["n"],
  n: ["o"],
};

// depth first
const hasPathDfs = (
  graph: UnDirectedGraph,
  src: string,
  dst: string
): boolean => {
  const stack = [src];
  const visited = new Set();
  while (stack.length) {
    const current = stack.pop();
    if (current === dst) return true;
    visited.add(current);
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
  return false;
};

// recursion
const hasPath = (
  graph: UnDirectedGraph,
  src: string,
  dst: string,
  visited: Record<string, boolean> = {}
): boolean => {
  if (src === dst) return true;
  if (src in visited) return false;
  visited[src] = true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

console.log(hasPathDfs(unDirectedGraph, "j", "m"));

interface GraphInterface {
  [key: string]: string[];
}

const adjanceyList: GraphInterface = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

//Stack
const hasPathStack = (
  graph: GraphInterface,
  src: string,
  dst: string
): boolean => {
  const stack = [src];
  while (stack.length) {
    const current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

console.log(hasPathStack(adjanceyList, "f", "k"));

// Recursive
const hasPath = (graph: GraphInterface, src: string, dst: string): boolean => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

console.log(hasPath(adjanceyList, "f", "k"));

const hasPathBreadthFirst = (
  graph: GraphInterface,
  src: string,
  dst: string
): Boolean => {
  const queue = [src];
  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(hasPathBreadthFirst(graph, "f", "k"));

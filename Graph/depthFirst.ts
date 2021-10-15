const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstPrint = (graph, sourceNode) => {
  const stack = [sourceNode];
  while (stack.length) {
    const current = stack.pop();
    console.log(current);
    for (let node of graph[current]) {
      stack.push(node);
    }
  }
};

console.log(depthFirstPrint(graph, "a"));

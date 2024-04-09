// n = number of cities
// flights = [[from, to, price], ...]
// src = source city
// dst = destination city
// k = max number of stops allowed

// The is idea is to do a BFS from src to destination and keep track of lowest
// price at each node continually updating the price at that node if we find a cheaper price.
// With the condition that we can only make k stops and can't go beyond that.
// The graph is a directed graph with the price of the flight as the weight of the edge.
// We keep track of the visited nodes and the price at that node in the visited map or array.

// Graph
// {
//     1: [[neighborNodeA, priceToGetToNeighborNodeA], [neighborNodeB, priceToGetToNeighborNodeB]],
// }

// Visited = {
//     nodeA: minPriceToGetToNodeAFromSourceNode,
//     nodeB: minPriceToGetToNodeAFromSourceNode,
//     destinationNode: minPriceToGetToDestinationNodeFromSourceNode
// }

var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = {};
  const visited = {};

  for (let i = 0; i < n; i++) {
    visited[i] = Number.MAX_VALUE;
  }

  for (const [from, to, price] of flights) {
    if (!(from in graph)) {
      graph[from] = [];
    }
    graph[from].push([to, price]);
  }

  visited[src] = 0;
  const queue = [[src, 0]];
  k++;

  while (k > 0 && queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [currentNode, currentPrice] = queue.shift();
      if (currentNode in graph) {
        for (const [nextNode, nextPrice] of graph[currentNode]) {
          const newPrice = currentPrice + nextPrice;
          if (newPrice < visited[nextNode]) {
            visited[nextNode] = newPrice;
            queue.push([nextNode, newPrice]);
          }
        }
      }
    }
    k--;
  }

  return visited[dst] === Number.MAX_VALUE ? -1 : visited[dst];
};

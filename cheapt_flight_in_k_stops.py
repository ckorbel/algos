
# The is idea is to do a BFS from src to destination and keep track of lowest 
# price at each node continually updating the price at that node if we find a cheaper price. 
# With the condition that we can only make k stops and can't go beyond that.
# The graph is a directed graph with the price of the flight as the weight of the edge. 
# We keep track of the visited nodes and the price at that node in the visited map or array. 

# Graph
# { 
#     1: [[neighborNodeA, priceToGetToNeighborNodeA], [neighborNodeB, priceToGetToNeighborNodeB]],
# }

# Visited = {
#     nodeA: minPriceToGetToNodeAFromSourceNode,
#     nodeB: minPriceToGetToNodeAFromSourceNode,
#     destinationNode: minPriceToGetToDestinationNodeFromSourceNode
# }

class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        graph = defaultdict(list)
        visited = [float('inf')] * n
        visited[src] = 0

        for start, to, price in flights:
            if start not in graph: 
                graph[start] = []
            graph[start].append([to, price])
        
        queue = deque([(src, 0)])
        k += 1
        while k and queue: 
            size = len(queue)
            for i in range(size): 
                currentNode, currentPrice = queue.popleft()
                for neighbor, price in graph[currentNode]:
                    newPrice = currentPrice + price
                    if newPrice < visited[neighbor]: 
                        visited[neighbor] = newPrice
                        queue.append((neighbor, newPrice))
            k -= 1
        return visited[dst] if visited[dst] != float('inf') else -1
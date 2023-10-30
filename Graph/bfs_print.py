from collections import deque

unDirectedGraph = {
  "a": ["c", "b"],
  "b": ["d"],
  "c": ["e"],
  "d": ["f"],
  "e": [],
  "f": [],
}


def dfs_print(graph, source):
  stack = [source]
  visited = set()

  while stack: 
    current = stack.pop()
    print(current)
    visited.add(current)
    for neighbor in graph[current]:
      stack.append(neighbor)

def print_dfs(source, graph):
  print(source)
  for neighbor in graph[source]:
    print_dfs(neighbor, graph)

def bfs_print(graph, source):
  queue = deque()
  queue.append(source)
  while queue:
    current = queue.popleft()
    print(current)
    for neighbors in graph[current]:
      queue.append(neighbors)


bfs_print(unDirectedGraph, "a")
  
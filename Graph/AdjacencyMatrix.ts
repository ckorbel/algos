// Adjacency Matrix
// takes up more space space increases based on vertices not edges
// faster lookup for specific edge but slower to iterate over all edges
// mainly because
// if you have you have a ton nodes/vertices maybe not use a matrix

/*ADJ Matrix: 
add vertex: 0(v^2)
add edge: O(1)
RemoveVertex: 0(v^2)
RemoveEdge: 0(1)
Query: O(1)
Space: O(v^2)
*/
// notice that undirect the "edge" must be stored in both place:
// both at "A" -> "B" and at "B" -> "A"
const UndirectedGraph = [
  [null, "A", "B", "C", "D", "E"],
  ["A", 0, 1, 0, 0, 1],
  ["B", 1, 0, 1, 0, 0],
  ["C", 0, 1, 0, 1, 0],
  ["D", 0, 0, 1, 0, 0],
  ["E", 1, 0, 0, 0, 0],
];

// does not need to be at both locations
const DirectGraph = [
  [null, "A", "B", "C", "D", "E"],
  ["A", 0, 1, 0, 0, 1],
  ["B", 0, 0, 1, 0, 0],
  ["C", 0, 1, 0, 1, 0],
  ["D", 0, 0, 1, 0, 0],
  ["E", 0, 0, 0, 0, 0],
];

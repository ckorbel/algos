# This is graph is undirected ie relationship are facebook type they go both ways
# edges are unweighted


class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        if not vertex in self.adjacency_list:
            self.adjacency_list[vertex] = []

    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.adjacency_list and vertex2 in self.adjacency_list:
            # both are added because its unweight
            self.adjacency_list[vertex1].append(vertex2)
            self.adjacency_list[vertex2]append(vertex1)


new_graph = Graph()
new_graph.add_vertex("A")
new_graph.add_vertex("B")
new_graph.add_vertex("C")
new_graph.add_vertex("D")
new_graph.add_edge("A", "D")
print(new_graph.adjacency_list)

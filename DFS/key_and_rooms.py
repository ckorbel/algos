class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        stack = [0]
        visited = set(stack)
        while stack:
            i = stack.pop()
            for j in rooms[i]:
                if j not in visited:
                    stack.append(j)
                    visited.add(j)
                    if len(visited) == len(rooms):
                        return True
        return len(visited) == len(rooms)

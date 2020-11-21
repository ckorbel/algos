class Solution:
    def __init__(self):
        self.max_area = 0

    def depth_first_search(self, current_island_size, grid, i, j):
        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[i]) or grid[i][j] != 1:
            return
        else:
            current_island_size += 1
            grid[i][j] = 0
        if current_island_size > self.max_area:
            self.max_area = current_island_size
        self.depth_first_search(current_island_size, grid, i - 1, j)
        self.depth_first_search(current_island_size, grid, i + 1, j)
        self.depth_first_search(current_island_size, grid, i, j - 1)
        self.depth_first_search(current_island_size, grid, i, j + 1)

    def maxAreaOfIsland(self, grid):
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    self.depth_first_search(1, grid, i, j)
        return self.max_area


grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]

answer = Solution()

print(answer.maxAreaOfIsland(grid))

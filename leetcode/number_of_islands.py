class Solution:
    def depth_first_search(self, grid, i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[i]) or grid[i][j] != "1":
            return
        else:
            grid[i][j] = "0"
        self.depth_first_search(grid, i - 1, j)  # up
        self.depth_first_search(grid, i + 1, j)  # down
        self.depth_first_search(grid, i, j - 1)  # left
        self.depth_first_search(grid, i, j + 1)  # right

    def numIslands(self, grid):
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == "1":
                    count += 1
                    self.depth_first_search(grid, i, j)
        return count

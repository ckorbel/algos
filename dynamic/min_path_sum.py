grid = [[1,3,1],[1,5,1],[4,2,1]]
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        if len(grid) < 1: 
            return 0
        rows = len(grid)
        cols = len(grid[0])
        
        # add left colum
        for i in range(1, rows):
            grid[i][0] += grid[i - 1][0]
        
        # add top row
        for j in range(1, cols):
            grid[0][j] += grid[0][j - 1]
                
        for i in range(1, rows):
            for j in range(1, cols):
                grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])
                
        return grid[rows - 1][cols - 1]





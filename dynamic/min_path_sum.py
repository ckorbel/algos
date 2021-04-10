grid = [[1,3,1],[1,5,1],[4,2,1]]

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        if len(grid) < 1: 
            return 0
        rows = len(grid)
        cols = len(grid[0])
        dp = [[0]*cols]*rows
        for i in range()





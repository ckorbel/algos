## number of ways you can climb the stairs

class Solution:
    def __init__(self): 
        self.memo = {}
    def climbStairs(self, n: int) -> int:
        if n in self.memo: 
            return self.memo[n]
        if n == 0: 
            return 1
        if n < 0: 
            return 0
        
        self.memo[n] = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        return self.memo[n]   

# using tabluation 0(n)
def climb_stairs(num):
    table = [0 in range(num)]
    table[0] = 1
    table[1] = 2
    for i in range(2, num):
        table[i] = table[i - 1] + table[i - 2]
    return table[len(num)]
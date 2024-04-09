class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        intervals = sorted(zip(startTime, endTime, profit))
        memo = {}
        def dfs(i):
            if i >= len(intervals):
                return 0
            if i in memo: 
                return memo[i]
            
            #dont include
            result = dfs(i + 1)

            #include
            j = bisect.bisect(intervals, (intervals[i][1], -1, -1))
            memo[i] = result = max(result, intervals[i][2] + dfs(j))
            return result

        return dfs(0)
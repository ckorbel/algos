# two pointer solution 
# pointer at start and at end caluclate max area based on shorter value of the two
# then increment the shorter of the two toward the middle
# incrementing the shorter of the two is a "process of elimination"
# linear time 0(n)

class Solution:
    def maxArea(self, height: List[int]) -> int:
        start = 0
        end = len(height) - 1
        max_area = 0
        while start < end:
            difference = end - start
            if height[start] < height[end]:
                max_area = max(max_area, height[start] * difference)
                start += 1
            else: 
                max_area = max(max_area, height[end] * difference)
                end -= 1
        return max_area
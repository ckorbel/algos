class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        total = 0
        for x in nums:
            if len(str(x)) % 2 == 0:
                total += 1
        return total
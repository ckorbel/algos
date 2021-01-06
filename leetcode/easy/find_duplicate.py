class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        tracker = set()
        for num in nums:
            if num in tracker:
                return num
            else:
                tracker.add(num)

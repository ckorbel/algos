# current = 5
# max = 6

# you only need to the sum you dont need the indices of the sliding window
# so if a current sum is negative simply reset it to 0 since we dont need the the prior items
# basically instead of moving left pointer up via sliding window you just reset current sum variable to 0

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current_sum = 0

        for num in nums:
            if current_sum < 0:
                current_sum = 0
            current_sum += num
            max_sum = max(current_sum, max_sum)
        return max_sum

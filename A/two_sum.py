class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 2: 
            return [0, 1]
        num_map = {}
        for i in range(len(nums)): 
            difference = target - nums[i]
            if(difference in num_map): 
                return [i, num_map[difference]]
            num_map[nums[i]] = i
        return [0, 0]
        
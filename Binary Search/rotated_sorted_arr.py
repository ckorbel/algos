# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4
import math
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums: 
            return -1
        
        left = 0
        right = len(nums) - 1
        
         
        while left <= right: 
            mid = math.floor((left + right) / 2)
            if target == nums[mid]: 
                return mid
            
            if nums[left] <= nums[mid]:
                if nums[left] <= target <= nums[mid]:
                    right = mid - 1
                else: 
                    left = mid + 1
            else: 
                if nums[mid] <= target <= nums[right]:
                    left = mid + 1
                else: 
                    right = mid - 1
        return -1
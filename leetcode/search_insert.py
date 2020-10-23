# uses binary search to find index or insert point
# runtime 0(log n)



class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        middle = round((start + end) / 2)
        while(start <= end):
            middle = round((start + end) / 2)
            if target > nums[middle]:
                start = middle + 1
            elif target < nums[middle]:
                end = middle - 1
            elif target == nums[middle]:
                return middle
        if target > nums[middle]:
            return middle + 1
        elif target > nums[middle] and middle != 0: 
            return middle - 1
        else: 
            return middle
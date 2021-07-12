# Input: candidates = [2,3,6,7], target = 7
# Output: [[2,2,3],[7]]

class Solution:
    def back_track(self, nums, target, path, results):
        if target < 0:
            return
        if target == 0:
            results.append(path)

        for i in range(len(nums)):
            self.back_track(nums[i:], target - nums[i],
                            path+[nums[i]], results)

    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        results = []
        self.back_track(candidates, target, [], results)
        return results

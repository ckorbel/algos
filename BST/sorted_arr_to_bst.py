# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if len(nums) < 1: 
            return None
        
        mid_point = len(nums) // 2
        root = TreeNode(nums[mid_point])
        root.left = self.sortedArrayToBST(nums[:mid_point])
        root.right = self.sortedArrayToBST(nums[mid_point + 1:])
        return root
        
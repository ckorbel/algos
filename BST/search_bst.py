# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        current = root
        while True:
            if current.val == val:
                return current
            if val < current.val:
                if current.left is None:
                    return None
                else:
                    current = current.left
            if val > current.val:
                if current.right is None:
                    return None
                else: 
                    current = current.right
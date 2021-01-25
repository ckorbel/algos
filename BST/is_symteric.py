# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        return self.is_mirror(root, root)
    
    def is_mirror(self, tree1, tree2):
        if tree1 == None and tree2 == None:
            return True
        if tree1 == None and tree2 != None: 
            return False
        if tree1 != None and tree2 == None: 
            return False
        
        return (tree1.val == tree2.val) and self.is_mirror(tree1.left, tree2.right) and self.is_mirror(tree1.right, tree2.left)
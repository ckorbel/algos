# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None: 
            return None
        visited = []
        def traverse(node):
            if node.left: 
                traverse(node.left)
                
            visited.append(node.val)
            
            if node.right: 
                traverse(node.right)
        traverse(root)
        return visited 
            
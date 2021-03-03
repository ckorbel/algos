# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        if root is None:
            return False
        
        node_stack = [root]
        while len(node_stack) >= 1: 
            current_node = node_stack.pop()
            
            if current_node.left:
                current_node.left.val += current_node.val
                node_stack.append(current_node.left)
            
            if current_node.right: 
                current_node.right.val += current_node.val
                node_stack.append(current_node.right)
            
            if current_node.left == None and current_node.right == None: 
                if current_node.val == targetSum: 
                    return True
        return False
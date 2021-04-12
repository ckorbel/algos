# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:    
    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        if not root: 
            return 
        
        if key > root.val: 
            root.right = self.deleteNode(root.right, key)
        
        if key < root.val: 
            root.left = self.deleteNode(root.left, key)
            
        # we found our value
        else: 
            # scenario: there is no left subtree or left child
            # then return the right child to the parent node
            if not root.left: 
                return root.right
            
            #  scenario it has a left child so we want the max value on the left subtree
            #  to replace the node we want to delete
            else:
                current = root.left
                while current.right: 
                    current = current.right
                
                # replace key val with found max value of left subtree
                root.val = current.val
                
                # replace the max value from the left subtree
                # by recursive do the same process
                root.left = self.deleteNode(root.left, current.val)
        return root
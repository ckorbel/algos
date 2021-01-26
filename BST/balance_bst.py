# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        if root is None: 
            return True
        tree_arr = []
        def dfs(node):
            if node: 
                dfs(node.left)
                tree_arr.append(node.val)
                dfs(node.right)
        dfs(root)
        
        def contruct_tree(tree):
            if not tree: 
                return None
            mid = len(tree) // 2
            root = TreeNode(tree[mid])
            root.left = contruct_tree(tree[:mid])
            root.right = contruct_tree(tree[mid + 1:])
            return root
        return contruct_tree(tree_arr)
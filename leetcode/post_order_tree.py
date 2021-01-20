"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if root is None: 
            return root
        stack = []
        visited = []
        stack.append(root)
        while len(stack) > 0: 
            node = stack.pop()
            visited.insert(0, node.val)
            for child in node.children: 
                stack.append(child)
        return visited
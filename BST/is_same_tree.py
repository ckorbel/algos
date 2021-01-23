class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        stack = [(p, q)]
        while stack:
            node1, node2 = stack.pop()
            if not node1 and not node2:
                continue 
            elif None in [node1, node2]:
                return False
            else: 
                if node1.val != node2.val:
                    return False
                stack.append((node1.left, node2.left))
                stack.append((node1.right, node2.right))
        return True


# recursive way
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if p and q: 
            return p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        else: 
            return p == q
            
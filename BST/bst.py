class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class BST:
    def __init__(self, root=None):
        self.root = root

    def print_inorder(self):
        if self.root is None:
            return "no root"
        visited = []

        def traverse(node):
            if node.left is not None:
                traverse(node.left)
            visited.append(node.val)
            if node.right is not None:
                traverse(node.right)

        traverse(self.root)
        return visited

    def search(self, val):
        if self.root is None:
            return None
        current = self.root
        while True:
            if val is current.val:
                return True

            if val < current.val:
                if current.left is not None:
                    current = current.left
                else:
                    return None
            else:
                if current.right is not None:
                    current = current.right
                else:
                    return None

    def insert(self, val):
        new_node = Node(val)
        if self.root is None:
            self.root = new_node
        else:
            current = self.root
            while True:
                if val is current.val:
                    return new_node
                if val > current.val:
                    if current.right is None:
                        current.right = new_node
                        return new_node
                    else:
                        current = current.right
                else:
                    if current.left is None:
                        current.left = new_node
                        return new_node
                    else:
                        current = current.left


bst = BST()
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.print_inorder()
print(bst.search(44))

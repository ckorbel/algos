/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);

    // found node
  } else {
    // found node has no left child or subtree
    if (!root.left) {
      return root.right;
      // found node has child or subtree but not right child
    } else if (!root.right) {
      return root.left;
    }

    // found node has both left and right child nodes
    // in this case we can either
    // replace found node with the min value of right subtree OR max value of left subtree
    let minNode = findMin(root.right);
    root.val = minNode.val;

    // recursive re-do the same process
    // this will continue travering down the tree until found found value
    // is a leaf node and is swapped for a null
    root.right = deleteNode(root.right, root.val);
  }
  return root;
}

function findMin(node: TreeNode | null): TreeNode {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

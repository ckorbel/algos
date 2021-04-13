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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let best = 0;

  function findDepth(node: TreeNode | null): number {
    if (!node) return 0;

    const leftHeight: number = findDepth(node.left);
    const rightHeight: number = findDepth(node.right);
    best = Math.max(best, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  findDepth(root);
  return best;
}

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
 *
 * The path cannot go backwards it need to be 1 direction it cant backtrack
 *
 */

function maxPathSum(root: TreeNode | null): number {
  let maxPathSum: number = Number.MIN_SAFE_INTEGER;

  function pathSum(node: TreeNode | null): number {
    if (!node) return 0;

    const left = Math.max(0, pathSum(node.left));
    const right = Math.max(0, pathSum(node.right));
    maxPathSum = Math.max(maxPathSum, left + right + node.val);
    return Math.max(left, right) + node.val;
  }

  pathSum(root);

  return maxPathSum;
}

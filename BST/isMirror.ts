//   Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isMirror(
  leftTree: TreeNode | null,
  rightTree: TreeNode | null
): boolean {
  if (leftTree === null && rightTree === null) return true;
  if (leftTree === null && rightTree !== null) return false;
  if (leftTree !== null && rightTree === null) return false;
  return (
    leftTree.val === rightTree.val &&
    isMirror(leftTree.left, rightTree.right) &&
    isMirror(leftTree.right, rightTree.left)
  );
}

function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root.left, root.right);
}

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

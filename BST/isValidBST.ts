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

function isValidBST(root: TreeNode | null): boolean {
  const visited = [];
  let inorder: boolean = true;
  function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }

    if (visited.length > 0) {
      if (
        node.val < visited[visited.length - 1] ||
        node.val === visited[visited.length - 1]
      ) {
        inorder = false;
      }
    }

    visited.push(node.val);

    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);
  return inorder;
}

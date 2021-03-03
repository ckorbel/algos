// does a BST path from root to leaf equal targetSum

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const nodeStack = [];
  nodeStack.push(root);
  while (nodeStack.length >= 1) {
    let currentNode = nodeStack.pop();

    if (currentNode.left !== null) {
      currentNode.left.val += currentNode.val;
      nodeStack.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      currentNode.right.val += currentNode.val;
      nodeStack.push(currentNode.right);
    }

    // if leaf node
    if (
      currentNode.left === null &&
      currentNode.right === null &&
      currentNode.val === targetSum
    ) {
      return true;
    }
  }
  return false;
};

//recursive version dfs
var hasPathSum = function (root, targetSum) {
  return dfs(root, 0, targetSum);
};

function dfs(node, currentSum, targetSum) {
  if (!node) return false;
  currentSum += node.val;

  //leaf node
  if (node.left === null && node.right === null) {
    return currentSum === targetSum;
  }

  return (
    dfs(node.left, currentSum, targetSum) ||
    dfs(node.right, currentSum, targetSum)
  );
}

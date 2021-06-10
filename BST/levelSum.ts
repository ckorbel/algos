// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

// Example 1:

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.

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

// BFS using 2 queues summing everything on a level
// then swapping the queueing to reset for the next level rinse repeat
// 0(n) time complexity n being the number of nodes in the tree
// 0(n) space complexity as well
function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;
  let currentLevel = 1;
  let currentSum = root.val;
  let maxSum = root.val;
  let maxLevel = 1;
  let currentQueue = [root];
  let nextLevelQueue = [];

  while (currentQueue.length > 0) {
    let currentNode = currentQueue.pop();
    currentSum += currentNode.val;

    if (currentNode.left) {
      nextLevelQueue.push(currentNode.left);
    }

    if (currentNode.right) {
      nextLevelQueue.push(currentNode.right);
    }

    // swapping everything is where the maagic of bfs queue works
    if (currentQueue.length === 0) {
      if (maxSum < currentSum) {
        maxSum = currentSum;
        maxLevel = currentLevel;
      }
      currentLevel++;
      currentSum = 0;
      currentQueue = nextLevelQueue;
      nextLevelQueue = [];
    }
  }
  return maxLevel;
}

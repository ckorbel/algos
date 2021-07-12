//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) return null;
  let current = head;
  const sortedNums: number[] = [];
  while (current) {
    sortedNums.push(current.val);
    current = current.next;
  }

  // binary search
  function convertToBST(nums: number[]): TreeNode | null {
    if (nums.length < 1) return null;
    const middle = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[middle]);
    root.left = convertToBST(nums.slice(0, middle));
    root.right = convertToBST(nums.slice(middle + 1));
    return root;
  }

  return convertToBST(sortedNums);
}

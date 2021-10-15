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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return "";
  let result: string = "";

  // pre-order traversal
  function dfs(node: TreeNode | null): void {
    if (!node) {
      result += "*";
    } else {
      result += node.val + "";
      dfs(node.left);
      dfs(node.right);
    }
  }

  dfs(root);
  console.log({ result });
  return result;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const nodes = data.split("");

  // bfs to re-built
  function buildTree() {
    let val = nodes.shift();

    if (val === "*") {
      return null;
    } else {
      let node = new TreeNode(Number(val));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  }

  return buildTree();
}

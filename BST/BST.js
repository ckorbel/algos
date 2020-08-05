class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // could use count property
      // instead we just break
      if (val === current.val) {
        return null;
      }
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(val) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while (true) {
      console.log(current.val);
      if (val === current.val) {
        return true;
      }
      if (val < current.val) {
        if (current.left === null) {
          return false;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return false;
        }
        current = current.right;
      }
    }
  }

  // breadth first search
  // traverse tree across
  bfs() {
    // linked list is better for a queue ease
    const queue = [];
    const visited = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  // dfs Pre-Order
  // depth first search
  // move down til hit bottom before visiting sibling nodes

  // create variable to store nodes visited
  // store root on subtree in var called current
  // helper function accepts the node of the var

  dfsPreOrder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.val);
      // go all the way left first before working right
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    // initialize recursive traversal at root
    traverse(this.root);
    return visited;
  }

  // same methods as pre-order
  // just visit right siblings before pushing
  // this make root last value push in
  dfsPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  // would be smallest to largest value
  dfsInOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree);
// console.log(tree.search(2));
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());

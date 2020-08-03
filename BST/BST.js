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
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(16);
tree.insert(7);
console.log(tree.search(2));

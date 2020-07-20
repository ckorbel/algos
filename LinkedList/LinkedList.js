class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove from end
  pop() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let prev;
    while (current) {
      prev = current;
      current = current.next;
      if (current === this.tail) {
        prev.next = null;
        this.tail = prev;
      }
    }
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
    this.length++;
  }

  //get value at index
  get(index) {
    if (!this.head) return null;
    if (this.length < index || index < 0) {
      return null;
    }

    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // insert value at specific index
  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.val = val;
    return true;
  }

  // insert value and insert a new Node
  insert(index, val) {
    if (index > this.length || index < 0) {
      return false;
    }

    if (index === this.length) {
      return this.push(val);
    }

    if (index === 0) {
      return this.unshift(val);
    }

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    return true;
  }

  reverse() {
    if (!this.head) return null;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const newList = new LL();

newList.push("hi");
newList.push("am I tail?");
newList.push("3!!");
// console.log(newList.tail);
// newList.pop();
// console.log(newList);
console.log(newList, newList.head.val);
newList.shift();
console.log(newList, newList.head.val);

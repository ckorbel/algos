// Why? In singly linked list 0(n) just to remove tail
// DLL is not 0(n) to get to end

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert at end
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // remove the end
  pop() {
    if (!this.head) {
      return null;
    }
    const oldTail = this.tail;
    const newTail = this.tail.prev;
    this.tail.prev = null;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return oldTail;
  }

  // insert at beginning
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      return null;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  // remove from beginning
  shift() {
    if (!this.head) {
      return null;
    }
    const oldHead = this.head;
    const newHead = this.head.next;
    this.head.next = null;
    newHead.prev = null;
    this.head = newHead;
    this.length--;
    return oldHead;
  }

  get(index) {
    if (!this.head || index < 0 || index > this.length) {
      return null;
    }
    // start from back or front depending on which index is closer to
    const mid = Math.floor(this.length / 2);
    if (index < mid) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // insert at specific index
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length) {
      return this.pop();
    }

    const foundNode = this.get(index);
    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;
    console.log(beforeNode, afterNode);
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length--;
    return foundNode;
  }
}

const dll = new DLL();
dll.push(0);
dll.push(1);
dll.push(2);
dll.push(3);
// console.log(dll);
// dll.pop();
// console.log(dll);
// dll.unshift("I AM first");
// console.log(dll);
// dll.unshift();
dll.remove(2);
console.log(dll);

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
  shift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      return null;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  // add an beginning
  unshift() {
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
}

const dll = new DLL();
dll.push(1);
dll.push(2);
dll.push(3);
// console.log(dll);
dll.pop();
// console.log(dll);
dll.shift("I AM first");
console.log(dll);
dll.unshift();
console.log(dll);

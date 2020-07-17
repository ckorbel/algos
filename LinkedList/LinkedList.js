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

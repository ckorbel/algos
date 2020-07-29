// Stack LIFO
// Arrays work well for stacks
// can use push and pop
// which go from the end of the array and
// there dont need to be re-indexed
// add to end remove from end

const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);

// QUE FIFO first in first out
// linked list is better for ques
// since they have 0(1) removal at start of list
// add to end remove from beginning

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const newHead = this.first.next;
    this.first.next = null;
    this.first = newHead;
    this.size--;
  }
}

const myQue = new Queue();
myQue.enqueue("first");
myQue.enqueue("second");
myQue.enqueue("third");
console.log(myQue);
myQue.dequeue();
console.log(myQue);

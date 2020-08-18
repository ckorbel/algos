// Heap the parent is larger than the children
// or Min Heap the opposite
// each node can at most have 2 children
// no implied ordering between siblings just
// between parent and child

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // add to end and then let it bubble up
  // keep swaping to top til it arrives in the right spot
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        return null;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  // removes largest element from binary heap
  dequeue() {
    if (!this.values) {
      return null;
    }
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
}

const ER = new PriorityQueue();
ER.enqueue("commond cold", 1);
ER.enqueue("gun shot wound", 6);
ER.enqueue("high fever", 3);
ER.enqueue("big deal", 7);
ER.enqueue("splinter", 2);
ER.enqueue("something else", 3);
console.log(ER.values);
console.log(ER.dequeue());
console.log(ER.values);
console.log(ER.dequeue());
console.log(ER.values);

// Heaps can be represented as an array
// for any index of an array n
// the left child is stored at 2n + 1
// the right child is stored at 2n + 2
// so index 6 L child would be index 13 and R child index 14
// to find a parent based on a child you do the opposite:
// (n - 1) / 2 => if child is 13: Math.floor(13 - 1) / 2 = 6
// it must use Math.floor()

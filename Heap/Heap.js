// Heap the parent is larger than the children
// or Min Heap the opposite
// each node can at most have 2 children
// no implied ordering between siblings just
// between parent and child

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // add to end and then let it bubble up
  // keep swaping to top til it arrives in the right spot
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(44);
console.log(heap.values);

// Heaps can be represented as an array
// for any index of an array n
// the left child is stored at 2n + 1
// the right child is stored at 2n + 2
// so index 6 L child would be index 13 and R child index 14
// to find a parent based on a child you do the opposite:
// (n - 1) / 2 => if child is 13: Math.floor(13 - 1) / 2 = 6
// it must use Math.floor()

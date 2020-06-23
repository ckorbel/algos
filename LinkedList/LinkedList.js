class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first Node
  insertFirst = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };
  //insert last Node
  insertLast = (data) => {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  };

  //insert at index
  insertAtIndex = (data, index) => {
    // check if in range
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  };

  //get at index
  getAtIndex = (index) => {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data, "at index");
      }
      count++;
      current = current.next;
    }
    return;
  };

  //remove at index
  removeAtIndex = (index) => {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  };

  // clear LinkedList
  clearLinkedList = () => {
    this.head = null;
    this.size = 0;
  };

  // print list data
  printListData = () => {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// ll.insertAtIndex(500, 4);
// ll.getAtIndex(0);
ll.removeAtIndex(1);
ll.clearLinkedList();

ll.printListData();
// console.log(ll);

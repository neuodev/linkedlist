class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addLast(node) {
    const newNode = new Node(node);
    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return newNode;
  }
}

const LL = new LinkedList();
LL.addLast(0);
LL.addLast(1);
LL.addLast(2);
console.log(LL);

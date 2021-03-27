class Node {
  constructor(node) {
    this.val = node;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addLast(node) {
    const newNode = new Node(node);
    if (this.head === null || this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  addFirst(node) {
    const newNode = new Node(node);
    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }
  deleteFirst() {
    if (this.head === null || this.tail === null) {
      return -1;
    }
    const head = this.head;
    if (this.head.node === this.tail.node) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    head.next = null;
    return head;
  }

  deleteLast() {
    if (this.head === null || this.tail === null) {
      return -1;
    }
    let node;
    if (this.head.val === this.tail.val) {
      node = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next && currentNode.next.next) {
        currentNode = currentNode.next;
      }
      // store the deleted node to return it
      node = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return node;
  }
  contains(val) {
    if (this.head === null || this.tail === null) {
      return -1;
    }
    // Traverse the Linked list untill we reach the tree
    let currentNode = this.head;
    let idx = 0;
    while (currentNode) {
      if (currentNode.val === val) return idx;
      currentNode = currentNode.next;
      idx++;
    }
    return -1;
  }
  indexOf(val) {
    if (this.head === null || this.tail === null) {
      return -1;
    }
    // Traverse the Linked list untill we reach the tree
    let currentNode = this.head;
    let idx = 0;
    while (currentNode) {
      if (currentNode.val === val) return idx;
      currentNode = currentNode.next;
      idx++;
    }
    return -1;
  }

  size() {
    return this.length;
  }

  toArray() {
    let array = [];
    if (this.head === null || this.tail === null) {
      return array;
    }

    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (this.head === null || this.tail === null) {
      return this;
    }

    let current = this.head.next;
    let prev = this.head;
    this.head = this.tail;
    this.tail = prev;
    this.tail.next = null;
    while (current) {
      // Ref the rest of the linked list
      let next = current.next;
      // change the potiner to the prev node
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  /// find kth node with length
  findKth(idxFromEnd) {
    if (idxFromEnd >= this.length || idxFromEnd < 0) return false;
    let idxFromStart = this.length - idxFromEnd - 1;
    console.log(`${this.length} - ${idxFromEnd} - 1 = ${idxFromStart}`);
    let idx = 0;
    let current = this.head;
    while (idx < idxFromStart) {
      current = current.next;
      idx++;
    }
    current.next = null;
    return current;
  }
}

const LL = new LinkedList();
LL.addLast(0);
LL.addLast(1);
LL.addLast(2);
LL.addLast(3);
LL.addLast(4);
// LL.reverse();
console.log(LL.toArray());
console.log(LL.findKth(6));

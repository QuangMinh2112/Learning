// Lisked_List - Prepend (Empty list)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // Nếu list không trống thì trỏ con trỏ của nút mới với các nút có sẵn
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let cur = this.head;
      let listValue = "";
      while (cur) {
        listValue += `${cur.value} `;
        cur = cur.next;
      }
      console.log("List value", listValue);
    }
  }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();

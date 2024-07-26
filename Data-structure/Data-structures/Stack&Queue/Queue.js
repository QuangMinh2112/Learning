// FIFO (first in first out)
// Queue supports two operations: enqueue and dequeue
// enqueue(element) - add an element to the queue
// dequeue() - remove the oldest element from the queue
// peek(): get the value of element at the front of the queue without removing it
// isEmpty(): check if the queue is empty
// size(): get the number of elements in the queue
// print(): visualize the elements in the queue

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }

//     return null;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.peek());
// console.log(queue.size());

// ----------------------------- Queue Optimize --------------------------------

class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
}

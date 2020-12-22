'use strict';

class Queue {
  constructor(){
    this.storage = new Array();
    this.end = null;
  }

  enqueue(value) {
    // O(1)
    this.storage.push(value);
    this.end = this.storage[this.storage.length - 1];
  }

  dequeue() {
    // O(n)
    return this.storage.shift();
    // TODO: add error checking
  }

  peek() {
    // O(1)
    return this.storage[0]; // [1, 2, 3, 4, 5]
    // TODO: add error checking
  }
}

module.exports = Queue;
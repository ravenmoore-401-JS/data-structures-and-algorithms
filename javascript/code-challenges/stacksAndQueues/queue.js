'use strict';

class Queue {
  constructor(){
    this.front = null;
    this.end = null;
  }

  enqueue(item) {
    let queuedItem = {value: item, next: null};
    if(this.end) {this.end.next = queuedItem;}
    this.end =queuedItem;
    if (!this.front){ this.front = queuedItem;}
  }


  dequeue() {
    if (!this.front){ throw new Error('Empty Queue');}
    const tempItem = this.front;
    this.front = this.front.next;
    return tempItem.value;
    // O(n)
  }

  peek() {
    // O(1)
    if (!this.front){ throw new Error('Empty Queue');}
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}

module.exports = Queue;
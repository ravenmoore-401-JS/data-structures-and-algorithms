'use strict';

class Stack {
  constructor(){
    this.length = 0;
  }

  peek() {
    if(!this.length){
      throw new Error('Empty Stack add something');
    }
    return this[this.length ];
  }

  push(item) {
    // O(n)
    this[this.length++] = item;
  }

  pop() {
    // O(n)
    if(!this.length){
      throw new Error('Empty Stack add something');
    }
    let item = this[this.length - 1];
    this.length--;

    return item;
  }

  isEmpty(){
    return this.length === 0;
  }
}

module.exports = Stack;
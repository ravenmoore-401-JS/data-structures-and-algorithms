'use strict';

class Stack {
  constructor(){
    this.storage ={};
    this.top = null;
  }

  peek( ) {
    if(!this.top){throw new Error('Stack is empty -cannot peak');}
    return this.top;
  }

  push(item) {
    // O(n)
    this.storage.unshift(item);
    this.top = item;
  }

  pop() {
    // O(n)
    const item = this.storage.shift();
    // reassign my top to the new top of the stack/array
    this.top = this.storage[0];
    // return the item that I poped off
    return item;
  }
}

module.exports = Stack;
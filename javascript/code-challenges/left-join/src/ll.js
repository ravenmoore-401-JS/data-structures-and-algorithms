'use strict';
const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    var current = this.head;
    while(current){
      console.log(current, 'im the current head')
      current = current.next;
    }
    current.next = node;
  }
}

module.exports = LinkedList;

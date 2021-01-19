'use strict';
const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value){
    let node = new Node(value);

    if(!this.head){return this.head = node;}
    let current = this.head;
    while(current){
      current = current.next;
    }
    current.next = node;
  }
}

module.exports = LinkedList;

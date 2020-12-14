'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if(node){
      return this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }

  append(value) {
    const node = new Node(value);
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  include(value){
    const node = new Node(value);
    let currentNode = this.head;
    while(currentNode.value !== value){
      currentNode = currentNode.next;
    }
  }

  toString(){
    const node = new Node(value);
    let currentNode = this.head;

  }
}

module.exports = LinkedList;
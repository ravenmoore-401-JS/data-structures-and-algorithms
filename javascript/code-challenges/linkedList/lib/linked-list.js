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
    let currentNode = this.head;
    while(currentNode.value !== value){
      currentNode = currentNode.next;
    }
  }

  toString(){
    let newString = "";
    let currentNode = this.head;
    if(!currentNode){
      return 'NULL';
    }
    while(currentNode){
      newString += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return newString += `{Null}`;
  }

  insertBefore(position,valueToAdd){
    let currentNode = this.head;
    while((currentNode.next !== null) && (currentNode.next.value !== position)){
      currentNode=currentNode.next;
    }
    if((!currentNode.next)||(currentNode.next.value !== position)){
      return null;
    }else{
      const node = new Node(valueToAdd);
      node.next = currentNode;
      currentNode.next = node;
    }
  }

  insertAfter(position,valueToAdd){
    let currentNode = this.head;
    while((currentNode.next !== null) && (currentNode.value !== position)){
      currentNode = currentNode.next;
    }
    if((!currentNode.next)||(currentNode.value !== position)){
      return null;
    }else{
      const node = new Node(valueToAdd);
      node.next = currentNode.next;
      currentNode.next = node;
    }
  }

}

module.exports = LinkedList;

'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if(!this.haed){return this.head = node;}
    let current = this.head;
    while(current){
      current =current.next;
    }
    current.next = node;
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
    if(!this.head){return false;}
    let currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.value === value) return true;
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
  kthFromTheEnd(k) {
    if (k<0) {
      return 'exemption';
    }

    // create array
    // unshift each space to get index counter in reverse
    // return value at index k

    let counter = -1;
    let currentNode = this.head;
    console.log(currentNode.next);
    while(currentNode !== null) {
      counter++;
      currentNode =currentNode.next;
      console.log('counter in while 1:', counter);
    }
    console.log('counter after while 1:', counter);
    if(counter - k < 0 || k > counter) {
      return 'exemption'
      // } else if ( (k === 0) && (currentNode.next === null) ) { return currentNode.value }
    } else {
      let counterMax = counter;
      currentNode = this.head;
      while(currentNode){
        console.log('counter inside while 2:', counter, k);
        counter--;
        if(counter === counterMax - k + 1) {
          return currentNode.value;
        }
        currentNode =currentNode.next;
      }
    }
  }

}

module.exports = LinkedList;

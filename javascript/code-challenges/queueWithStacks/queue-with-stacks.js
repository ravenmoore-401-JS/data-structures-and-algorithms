'use strict';

const Stack = require('./stacks');

let stackA = new Stack();
let stackB = new Stack();

class PsuedoQueue{

  enqueue (array, item) {
  //add error checking for empty array here
    for(let i = 0; i < array.length; i++){
      stackA.push(array[i]);
      console.log(stackA)
    }
    stackA.push(item);
    for(let i = 0; i < stackA.length; i++){
      stackB.push(stackA.top);
      stackA.pop();
    }
    console.log(stackB,'that was stack b')
    return stackB;
  }

  dequeue(){
    if(!stackB.top)return 'no queue add something first';
    let value = stackB.top;
    stackB.pop();
    return value;
  }
}

module.exports = PsuedoQueue;

'use strict';
const Node = require('./node');
const Queue =require('./queue');

class BinaryTree {
  constructor(root = null){
    this.root= root;
  }

  preOrder(){
    const results = [];
    if (!this.root){return null;}
    let _traverse = (node) => {
      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  inOrder(){
    const results = [];
    if (!this.root){return null;}
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;

  }

  postOrder(){
    const results = [];
    if (!this.root){return null;}
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    return results;

  }

  findMaxValue(){
    let treeMax = 0;
    if(!this.root) return null;
    let _traverse = (node) => {
      if(node.value > treeMax)treeMax= node.value;
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return treeMax;
  }

  contains(value){
    if(typeof value !== 'number'){
      return null;
    }
    if(!this.root) return null;
    let _traverse = (node) => {
      if(node.value === value)return true;
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      return false;
    };
    _traverse(this.root);
  }

  breadthFirst(){
    let output = [];
    let holdingQueue = new Queue;
    if(!this.root){return null;}
    if(!holdingQueue.front) {return null;}
    let _traverse =(node) =>{
      output += node.value;
      if(node.left) holdingQueue.enqueue(node.left.value);
      if(node.right) holdingQueue.enqueue(node.right.value);
      if(holdingQueue.front.value === node.value){
        holdingQueue.dequeue();
        _traverse(holdingQueue.front);
      }
    };
    _traverse(this.root);
    return output;
  }
}

class BinarySearchTree extends BinaryTree{

  addToBST(value){
    if(typeof value !== 'number'){
      return null;
    }
    if (!this.root){
      this.root = new Node(value);
      return;
    }
    let _insert = (node) => {
      if(value < node.value){
        if(node.left === null){
          node.left = new Node(value);
          return;
        }
        else if(node.left){
          return _insert(node.left);
        }
      }
      if(value >= node.value){
        if(node.right === null){
          node.right = new Node(value);
          return;
        }
        else if(node.right){
          return _insert(node.right);
        }
      }
    };
    _insert(this.root);
  }
}

module.exports = BinaryTree;
module.exports = BinarySearchTree;

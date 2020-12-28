'use strict';
const Node = require('./node');

class BinaryTree {
  constructor(root = null){
    this.root= root;
  };

  preOrder(){
    const results = [];
    if (!root){return null;}
    let _traverse = (node) => {
      results.push(node.value);   
      if (node.left) _traverse(node.left)
      if (node.right) _traverse(node.right)
    }
    _traverse(this.root);
  }

  inOrder(){
    const results = [];
    if (!root){return null;}
    let _traverse = (node) => {
      if (node.left) _traverse(node.left)
      results.push(node.value);   
      if (node.right) _traverse(node.right)
    }
    _traverse(this.root);
  }

  postOrder(){
    const results = [];
    if (!root){return null;}
    let _traverse = (node) => {
      if (node.left) _traverse(node.left)
      if (node.right) _traverse(node.right)
      results.push(node.value);   
    }
    _traverse(this.root);
  }

  findMaxValue(tree){
    let treeMax = 0;
    if(!tree.root) return null;
    let _traverse = (node) => {
      if(node.value > treeMax)treeMax= node.value;
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(tree);
    return treeMax;
  }
}

class BinarySearchTree extends BinaryTree{

  addToBottom(value){
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
}


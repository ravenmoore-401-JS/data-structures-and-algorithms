'use strict';
const Node = require('./node');

class BinaryTree {
  constructor(root = null){
    this.root= root;
  }
}

const preOrder = (root)=> {
  if (!root){
    return undefined;
  }
  //do root things here
  console.log('im at node',root);
  //then traverse
  preOrder(root.left);
  preOrder(root.right);
  return undefined;
};
const postOrder = (root)=> {
  if (!root){
    return undefined;
  }
  //do root things here
  //then traverse
  postOrder(root.left);
  postOrder(root.right);
  console.log('im at node',root);
  return undefined;
};
const inOrder=(root)=>{
  if (!root){
    return undefined;
  }

  inOrder(root.left);
  console.log('im at node',root);
  inOrder(root.right);
  return undefined;
};


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10= new Node(10);


const tree = new BinaryTree(node1);

node1.left =node2;
node1.right =node3;

node2.left =node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node4.left = node8;

node8.left = node9;
node8.right = node10;

preOrder(tree);
postOrder(tree);
inOrder(tree);

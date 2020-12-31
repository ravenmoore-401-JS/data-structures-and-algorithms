'use strict';

let BinaryTree = require('../tree');
let BinarySearchTree = require('../tree');

describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(2);
    expect(tree.root).toEqual(2);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const bsTree = new BinarySearchTree();
    bsTree.addToBST(10);
    bsTree.addToBST(15);
    bsTree.addToBST(8);

    expect(bsTree.root.left.value).toEqual(8);
    expect(bsTree.root.right.value).toEqual(15);
  });
  
  it('Can successfully return a collection from a preorder traversal', () => {
    const bsTree = new BinarySearchTree();
    bsTree.addToBST(10);
    bsTree.addToBST(15);
    bsTree.addToBST(8);

    expect(bsTree.preOrder()).toEqual([10,8,15]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    const bsTree = new BinarySearchTree();
    bsTree.addToBST(10);
    bsTree.addToBST(15);
    bsTree.addToBST(8);

    expect(bsTree.inOrder()).toEqual([8,10,15]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const bsTree = new BinarySearchTree();
    bsTree.addToBST(10);
    bsTree.addToBST(15);
    bsTree.addToBST(8);

    expect(bsTree.postOrder()).toEqual([8,15,10]);
  });

});


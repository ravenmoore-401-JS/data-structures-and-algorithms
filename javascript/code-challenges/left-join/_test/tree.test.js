'use strict';

let Tree = require('../src/tree');


describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new Tree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new Tree(2);
    expect(tree.root).toEqual(2);
  });
  it('can add to a tree', () => {
    const tree = new Tree();
    tree.add(10);
    expect(tree.root.value).toEqual(10);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const tree = new Tree();
    tree.add(10);
    tree.add(8);
    tree.add(15);

    expect(tree.root.left.value).toEqual(8);
    expect(tree.root.right.value).toEqual(15);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    const tree = new Tree();
    tree.add(10);
    tree.add(8);
    tree.add(15);

    expect(tree.preOrder()).toEqual([10,8,15]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    const tree = new Tree();
    tree.add(10);
    tree.add(8);
    tree.add(15);

    expect(tree.inOrder()).toEqual([8,10,15]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const tree = new Tree();
    tree.add(10);
    tree.add(8);
    tree.add(15);

    expect(tree.postOrder()).toEqual([8,15,10]);
  });

});


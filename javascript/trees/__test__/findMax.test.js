'use strict';

let BinarySearchTree = require('../tree');

describe('findMaxValue', () => {
  it(' it should find max value any where in a tre', () => {
    const bsTree = new BinarySearchTree();
    bsTree.addToBST(10);
    bsTree.addToBST(15);
    bsTree.addToBST(8);

    expect(bsTree.findMaxValue()).toEqual(15);
  });

  it('it should return null on empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.findMaxValue()).toEqual(null);
  });
});


'use strict';

let BinaryTree = require('../tree');
let BinarySearchTree = require('../tree');

xdescribe('breadthFirst()', () => {
  it('document a tree breadth wise', () => {
    const tree = new BinaryTree();

    //mock a tree some how
    expect(tree.breadthFirst()).toEqual(["arry  of mock tree"]);
  });
});
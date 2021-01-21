'use strict';

let LL = require('../src/ll');

describe('Linked List', () => {
  const list = new LL();
  it('creates a linked list', () => {
    expect(list.head).toEqual(null);
  });
});



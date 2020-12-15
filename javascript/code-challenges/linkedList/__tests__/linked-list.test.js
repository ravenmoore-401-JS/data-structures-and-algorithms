'use strict';

let LL = require('../lib/linked-list.js');

describe('Linked List', () => {
  it('inserts a node at the beginning an an empty list', () => {
    const list = new LL();
    list.insert('blue');
    list.insert('green');
    list.insert('purple');
    list.insert('guava');

    console.log('this is a list of colors', list);

    expect(list.head.value).toEqual('guava');
  });

});


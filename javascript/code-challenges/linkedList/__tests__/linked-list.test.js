'use strict';

let LL = require('../lib/linked-list.js');

xdescribe('Linked List', () => {
  it('inserts a node at the beginning an an empty list', () => {
    const list = new LL();
    list.insert('blue');
    list.insert('green');
    list.insert('purple');
    list.insert('guava');

    expect(list.head.value).toEqual('guava');
  });
  it('returns a boolien if a value exists in a list',
    ()=> {
      const list = new LL();
      list.insert('blue');
      list.insert('green');
      list.insert('purple');
      list.insert('guava');

      expect(list.include('purple')).toEqual(true);
    });
  it('returns a string version of a linked list',()=>{
    const list = new LL();
    list.insert('blue');
    list.insert('green');
    list.insert('purple');
    list.insert('guava');

    expect(list.toString()).toEqual('{blue} -> {green} -> {purple} -> {guava} -> {Null}');
  });
  it('inserts a value before a chosen position', ()=>{
    const list = new LL();
    list.insert('blue');
    list.insert('green');
    list.insert('purple');
    list.insert('guava');

    list.insertBefore('green','Orange');
    expect(list.include('Orange')).toEqual(true);
    expect()

  });
  it('inserts a value after a chosen position', ()=>{

  });
});



'use strict';

const Hash = require('../hashTable');

describe('Hash Table', () => {
  const newHash = new Hash(25);
  it('can start a hashTable', () => {
    expect(newHash[1]).toBeUndefined();
  });

  it('can hash a key', () => {
    let hash = newHash.hash('cat');
    expect(hash).toEqual(4);
  });

  it('can Add a key/value to your hashtable', () =>{
    newHash.set('cat', 'lena cat hates laptops');
    let key = newHash.hash('cat');
    expect(newHash.map[key].head.value).toEqual({ cat: 'lena cat hates laptops' });
  });

});

'use strict';

const HashMap = require('../src/hashMap');

describe('Hash Table', () => {
  const newHash = new HashMap(25);
  it('can start a hashTable', () => {
    expect(newHash[1]).toBeUndefined();
  });

  it('can hash a key', () => {
    let hash = newHash.hash('cat');
    expect(hash).toEqual(0);
  });

  it('can Add a key/value to your hashtable', () =>{
    newHash.set('cat', 'lena cat hates laptops');
    let key = newHash.hash('cat');
    expect(newHash.map[key].head.value).toEqual({ cat: 'lena cat hates laptops' });
  });

});


// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision;

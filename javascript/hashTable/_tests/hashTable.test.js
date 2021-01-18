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

  it('get a value', () =>{
    const catKey = newHash.get('cat');
    console.log('catkey',catKey);
    expect(catKey).toEqual({ cat: 'lena cat hates laptops' });
  });

  it('wont get a N/A value', () =>{
    const dogKey = newHash.get('dog');
    console.log('dogkey',dogKey);
    expect(dogKey).toBe(null);
  });

  it('returns a true false on if a key is in the map', () =>{
    expect(newHash.contains('cat')).toBe(true);
  });

});


// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision;
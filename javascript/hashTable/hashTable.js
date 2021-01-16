'use strict';

const LL = require('./src/ll');

class HashMap {
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  hash(key){
    const hashNum = 42;
    return key.split('').reduce((acc,value) => {
      return acc + value.charCodeAt(0);
    }, 0) * hashNum % this.size;
    // do fancy math to make hash indexes can do lots of options
  }

  set(key, value){
    // use hash on key
    const hashedKey = this.hash(key);

    const thingToAdd = {[key]:value};

    // handle overlap
    if (!this.map[hashedKey]){this.map[hashedKey] = new LL();}
    // add hased key:value pair to tabele at the hash index
    this.map[hashedKey].add(thingToAdd);
  }

  get(key){
    // hash incoming key
    const hashedKey = this.hash(key);
    // return matching key
    return this.map[hashedKey];
  }

  contains(key){

    // hash incoming key
    const hashedKey = this.hash(key);
    // search for matching index
    if(this.map[hashedKey])return this.map[hashedKey];
    return false;
    // return t/f if exists

  }
}
module.exports = HashMap;

'use strict';

const LL = require('./src/ll');

class HashMap {
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  hash(word){
    const hashNum = 42;
      //has later
  }

  set(word){
    const hashedKey = this.hash(word);

    const thingToAdd = {[word]:word};

    // handle overlap
    if (!this.map[hashedKey]){this.map[hashedKey] = new LL();}
    // add hased key:value pair to tabele at the hash index
    this.map[hashedKey].add(thingToAdd);
  }

}
module.exports = HashMap;

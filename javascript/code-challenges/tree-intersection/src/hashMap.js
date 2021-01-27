const LL = require('./src/ll');

class HashMap {
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  hash(key){
    const hashNum = 42;
    const hashedKey = 0;

    for(let i=0;i <key.length;i++){
      hashedKey + key.charCodeAt(i);
      hashedKey* hashNum%this.size;
    }
    console.log('hashed value', hashedKey);
    return hashedKey;
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
}
module.exports = HashMap;

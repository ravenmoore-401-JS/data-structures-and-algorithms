'use strict';

const LL = require('./src/ll');

class HashMap {
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  hash(word){
    const hashNum = 42;
    const letterCount = 0;

    for(let i=0;i <word.length;i++){
      letterCount + word.charCodeAt(i);
      letterCount* hashNum%this.size;
    }
    console.log('hashed value', letterCount);
    return letterCount;
  }

  set(word){
    const hashedKey = this.hash(word);
    const thingToAdd = {[word]:word};

    // handle overlap
    if (!this.map[hashedKey]){
      this.map[hashedKey] = new LL();
      this.map[hashedKey].add(thingToAdd);
      return;
    }
    if(this.map[hashedKey]){
      let current = this.map[hashedKey].head;
      while(current){
        if(current.value === current.next.value)return current.value;
        current = current.next;
      }
      return null;

    }
  }
}

const stringMap = new HashMap(500);

function repeatedWord(string){

  const splitString = (str) =>{
    let wordsArr = [];
    let tempStr = '';
    for(let i=0;i< str.length;i++){
      if(str[i] !== ' '){
        tempStr += str[i];
      }else{
        wordsArr = [...wordsArr,tempStr];
        tempStr = '';
      }
      return wordsArr;
    }
  };

  const words = splitString(string);
  for(let i=0;i<words.length;i++){
    stringMap.set(words[i]);
  }
}

const testString= "I am a Purple Hippo, and there is a Purple rino over there!"
const test = repeatedWord(testString);

console.log(test);
module.exports = HashMap;

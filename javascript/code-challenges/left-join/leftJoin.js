'use strict';

const HashMap = require('./src/hashMap');

const joinedMap = new HashMap(222);

const mapArray = [];

function leftJoin(mapArr, opt){
  if(opt === 'left') opt = 'i++';
  if(opt === 'right') opt = 'i--';
  for(let i =0; i< mapArr.length; opt){
    for(let j=0; j< mapArr[i].bucket;j++){
      const key = mapArr[i].map[j].head.key;
      const value = mapArr[i].map[j].head.value;
      joinedMap.set(key,value);
    }
  }
  return joinedMap;
}

leftJoin(mapArray);

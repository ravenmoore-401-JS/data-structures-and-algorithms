'use strict';

const sort = require('../merge-sort');

describe('merge-sort',() => {
  it('sorts an array lowest to highest', () =>{
    let test = [15,2,4,7,17,3];
    expect(sort(test)).toEqual([2,3,4,7,15,17]);
  });
  it('sorts an array lowest to highest with duplicate values handled', () =>{
    let test = [15,2,7,7,17,3];
    expect(sort(test)).toEqual([2,3,7,7,15,17]);
  });
  it('works on empty arrays', () =>{
    let test = [];
    expect(sort(test)).toEqual([]);
  });
});

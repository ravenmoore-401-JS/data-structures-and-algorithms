'use strict';

const sort = require('../selection-sort')

describe('selection-sort',() => {
  it('sorts an array lowest to highest', () =>{
    let test = [15,2,4,17,77,3];
    expect(sort(test)).toEqual([2,3,4,15,17,77]);
  });
});

'use strict';
const Stack = require('../stack');

describe('stacks', () => {
  describe('push()', () => {
    it('add a value to the top of a stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.top).toEqual(1);
    });

  });

  describe('pop()', () => {
    it('removes a values from the top of a stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.pop()).toEqual(1);
    });

    // it('returns null if no values are in the stack', () => {

    // })
  });
});


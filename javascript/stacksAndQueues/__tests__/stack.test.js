'use strict';
const Stack = require('../stacks');

describe('stacks', () => {
  describe('push()', () => {
    it('add a value to the top of a stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.length).toEqual(1);
    });

  });

  describe('peek()', ()=>{
    it('should look at the front of the stack', ()=>{
      let stack = new Stack();
      stack.push('a');
      expect(stack.peek()).toBe('a');
    });
  });

  describe('isEmpty()',()=>{
    it('should return boolean of content status', ()=>{
      let stack = new Stack();
      expect(stack.isEmpty()).toEqual(true);
    });
  });

  describe('pop()', () => {
    it('removes a values from the top of a stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.pop()).toEqual(1);
    });

  });
});


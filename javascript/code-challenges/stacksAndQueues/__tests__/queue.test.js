'use strict';

const Queue = require('../queue');

describe('queue', () => {
  describe('enqueue()', () => {
    it('add something to the end of a queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.end.value).toEqual(1);
    });
  });
  describe('dequeue()',()=>{
    it('should remove something from the front of the queue', ()=>{
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toEqual(1);
    });
  });
  describe('peek()',()=>{
    it('should show us the next item in the queue', ()=>{
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
    });
  });
  describe('isEmpty()',()=>{
    it('should show us the next item in the queue', ()=>{
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

});

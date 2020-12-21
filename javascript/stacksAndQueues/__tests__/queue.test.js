'use strict';

const Queue = require('../queue');

describe('queue', () => {
  describe('enqueue()', () => {
    it('add something to the end of a queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.end).toEqual(1);
    })
  })
})
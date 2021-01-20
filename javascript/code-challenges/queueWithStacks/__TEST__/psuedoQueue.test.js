'use strict';

const PsuedoQueue = require('../queue-with-stacks');

describe('PsuedoQueue', () => {
  const testArray = [1,2,3,4,5,6,7];
  describe('enqueue(item)', () => {
    it('add something to the end of the psuedoqueue', () => {
      const queue = new PsuedoQueue();
      queue.enqueue(8);
      console.log('this is queue', queue);
      expect(queue).toEqual(8);
    });
  });
  describe('enqueue(item, array)', () => {
    it('create a queue from the array add something to the end it', () => {
      const queue = new PsuedoQueue();
      queue.enqueue(8 ,testArray);
      console.log('this is queue', queue);
      expect(queue).toEqual(1,2,3,4,5,6,7,8);
    });
  });
  describe('dequeue()', () => {
    it('remove the first item in the queue', () => {
      const queue = new PsuedoQueue();
      queue.enqueue(8 ,testArray);
      console.log('this is queue', queue);
      expect(queue.dequeue()).toEqual(2,3,4,5,6,7,8);
    });
  });
});

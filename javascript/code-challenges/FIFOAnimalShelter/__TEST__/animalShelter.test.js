'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

xdescribe('animal shelter', () => {
  describe('enqueue()', () => {
    it('should add one cat to the shelter', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('cat');
      expect(shelter.end.value).toEqual('cat');
    });
    it('should add one cat and then one dog to the shelter', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('cat');
      shelter.enqueue('dog');
      expect(shelter.front.value).toEqual('cat');
      expect(shelter.end.value).toEqual('dog');
    });
    it('should return null if not cat or dog', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('snake');
      expect(shelter.front).toBe(null);
    });
    it('should work with caps in the input', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('CaT');
      expect(shelter.front.value).toEqual('cat');
    });
  });

  describe('dequeue()', () => {
    it('remove the first animal in the queue', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('cat');
      expect(shelter.dequeue('cat')).toEqual('cat');
    });
    it('not work with invalid animals', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('cat');
      shelter.enqueue('dog');
      expect(shelter.dequeue('snake')).toBe(null);
    });
    it('if oposit option in preferance it should return what the next animal to be adopted', () =>{
      const shelter = new AnimalShelter();
      shelter.enqueue('cat');
      expect(shelter.dequeue('dog')).toEqual('the next animal is cat');
    });
  });
});

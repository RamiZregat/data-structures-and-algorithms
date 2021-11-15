'use strict';
const AnimalShelter = require('../queue-animal-shelter');

describe('Animal Shelter',()=>{
  it('Test if the enqueue works if the animal was a cat or a dog and the queue was empty',()=>{
    let animalShelter=new AnimalShelter;
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.dogsFront.value).toEqual('dog');
    expect(animalShelter.catsFront.value).toEqual('cat');
  });

  it('Test if the animal was not a cat or a dog',()=>{
    let animalShelter=new AnimalShelter;
    expect(animalShelter.enqueue('fox')).toEqual('exception');
  });

  it('Test if the dequeue works and return dog or cat if existed in queue',()=>{
    let animalShelter=new AnimalShelter;
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.dequeue('cat')).toEqual('cat');
    expect(animalShelter.dequeue('dog')).toEqual('dog');
  });

  it('Test if we dequeue a dog or a cat and it\'s inexistent in queue',()=>{
    let animalShelter=new AnimalShelter;
    expect(animalShelter.dequeue('cat')).toEqual('exception');
    expect(animalShelter.dequeue('dog')).toEqual('exception');
  });

  it('Test if we dequeue anything but not a dog or a cat',()=>{
    let animalShelter=new AnimalShelter;
    expect(animalShelter.dequeue('fox')).toEqual(null);
  });
});

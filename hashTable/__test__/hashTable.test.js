'use strict';
const Node  = require('../../linked-list/Node');
const {Hashmap}=require('../hashTable');

describe('Hash Map', () => {
  test('should create a hash map with pre defined size', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap).toBeDefined();
    expect(hashMap.size).toBe(5000);
    expect(hashMap.storage.length).toBe(5000);
  });

  test('should add elements of key and values to hash map', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.storage[hashMap.getHash('one')]).toBeDefined();
    expect(hashMap.storage[hashMap.getHash('two')]).toBeDefined();
    expect(hashMap.storage[hashMap.getHash('three')]).toBeDefined();
  });

  test('should get the value of a key if exist', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('eno', 'sss');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.getValue('one')).toBe('test1');
    expect(hashMap.getValue('eno')).toBe('sss');
    expect(hashMap.getValue('two')).toBe('test2');
    expect(hashMap.getValue('three')).toBe('test3');

  });

  test('should check if a key is saved in the map', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.getEntry('one')).toBeDefined();
    expect(hashMap.getEntry('two')).toBeDefined();
    expect(hashMap.getEntry('three')).toBeDefined();
  });
});


describe('Hash Map Repeated Words', () => {
  const case1 = 'Once upon a time, there was a brave princess who...';
  const case2 =
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  const case3 =
      'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
  test(' Case 1', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case1)).toBe('a');
  });

  test(' Case 2', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case2)).toBe('it');
  });

  test(' Case 3', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case3)).toBe('summer');
  });
});

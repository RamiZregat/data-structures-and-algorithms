'use strict';
const HashMap = require('./hashTable');

describe('Hash Map', () => {
  test('should create a hash map with pre defined size', () => {
    const hashMap = new HashMap(5000);
    expect(hashMap).toBeDefined();
    expect(hashMap.size).toBe(5000);
    expect(hashMap.map.length).toBe(5000);
  });

  test('should add elements of key and values to hash map', () => {
    const hashMap = new HashMap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.map[hashMap.getHash('one')]).toBeDefined();
    expect(hashMap.map[hashMap.getHash('two')]).toBeDefined();
    expect(hashMap.map[hashMap.getHash('three')]).toBeDefined();
  });

  test('should get the value of a key if exist', () => {
    const hashMap = new HashMap(5000);
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
    const hashMap = new HashMap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.getEntry('one')).toBeDefined();
    expect(hashMap.getEntry('two')).toBeDefined();
    expect(hashMap.getEntry('three')).toBeDefined();
  });
});

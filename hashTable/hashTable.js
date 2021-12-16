'use strict';
const {LinkedList} = require('../linked-list/LinkedList');

class Hashmap {

  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  getHash(key) {
    const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size;
  }

  add(key, value) {
    const hash = this.getHash(key);

    const entry = { [key]: value };

    if (!this.storage[hash]) {
      this.storage[hash] = new LinkedList();
    }

    this.storage[hash].insert(entry);

  }
  contains(key) {
    const hash = this.code(key);
    if (this.storage[hash]) return true;
    return false;
  }
  getEntry(key) {
    const hash = this.getHash(key);

    return this.storage[hash].containEntry(key);
  }
  getValue(key) {
    const hash = this.getHash(key);
    if(this.storage[hash].containValue(key)){
      return this.storage[hash].containValue(key);
    }else{
      return 'Value is not defined';
    }

  }
  repeatedWord(string) {
    const array = string.split(' ');
    let repeated = '';
    let shouldSkip = false;
    array.forEach((word) => {
      if (shouldSkip) return;

      if (word.includes(',')) {
        word = word.split('');
        word.pop();
        word = word.join('');
      }

      word = word.toLowerCase();
      const hash = this.getHash(word);
      if (!this.storage[hash]) {
        const linkedList = new LinkedList();
        linkedList.insert({ [word]: word });
        this.storage[hash] = linkedList;
      } else if (this.storage[hash].head.value[word] === word) {
        shouldSkip = true;
        return (repeated = word);
      } else this.storage[hash].insert({ [word]: word });
    });
    return repeated;
  }
}


module.exports = {Hashmap};

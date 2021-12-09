'use strict';
const {LinkedList} = require('../linked-list/LinkedList');

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  getHash(key) {
    const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size;
  }

  add(key, value) {
    const hash = this.getHash(key);

    const entry = { [key]: value };

    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].insert(entry);

  }
  getEntry(key) {
    const hash = this.getHash(key);

    return this.map[hash].containEntry(key);
  }
  getValue(key) {
    const hash = this.getHash(key);
    if(this.map[hash].containValue(key)){
      return this.map[hash].containValue(key);
    }else{
      return 'Value is not defined';
    }

  }
}


module.exports = HashMap;

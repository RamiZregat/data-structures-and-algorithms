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
  get(key) {
    const hash = this.getHash(key);
    if (this.storage[hash]) {
      if (this.storage[hash].length > 1) {
        let node = this.storage[hash].head;
        while (node) {
          if (node.value[key]) return node.value[key];
          node = node.next;
        }
      } else {
        return this.storage[hash].head.value[key];
      }
    }
  }
  contains(key) {
    const hash = this.getHash(key);
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
  treeIntersection(tree1, tree2) {
    if (!tree1.root && !tree2.root && !tree1 && !tree2) return 'empty tree/s';
    const arr = [];

    const addNode = (val) => {
      if (this.storage[val]) {
        this.storage[val].insert(val);
      } else {
        const linkList = new LinkedList();
        linkList.insert(val);
        this.storage[val] = linkList;
      }
    };

    const addTree = (node) => {
      if (node.value) addNode(node.value);
      if (node.left) addTree(node.left);
      if (node.right) addTree(node.right);
    };
    addTree(tree1.root);

    const checkIntersection = (node) => {
      if (this.storage[node.value]) {
        arr.push(node.value);
      }
      if (node.left) checkIntersection(node.left);
      if (node.right) checkIntersection(node.right);
    };
    checkIntersection(tree2.root);

    return arr;
  }

}
function leftJoin(lMap, rMap) {
  const result = [];
  for (let i in lMap.storage) {
    result.push(Object.entries(lMap.storage[i].head.value)[0]);
  }
  for (let i in result) {
    if (rMap.get(result[i][0])) {
      result[i].push(rMap.get(result[i][0]));
    } else {
      result[i].push('null');
    }
  }
  return result;
}


module.exports = {Hashmap,leftJoin};

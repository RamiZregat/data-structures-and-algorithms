'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length=0;
  }
  //   ----------------------
  //   Solution without Tail
  //   ----------------------
  //   insert(value){
  //     const newNode= new Node(value);
  //     if(!this.head){
  //       this.head=newNode;
  //       return this;
  //     }
  //     let currentNode=this.head;

  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next=newNode;
  //     return this;
  //   }

  // }
  //   ----------------------
  //   Solution with Tail
  //   ----------------------
  // insert(value) {
  //   const newNode = new Node(value);
  //   this.length++;
  //   if (!this.head) {
  //     this.head = newNode;
  //     return this;
  //   }
  //   if (!this.head.next) {
  //     this.head.next = newNode;
  //   }
  //   if (this.tail) {
  //     this.tail.next = newNode;
  //   }
  //   this.tail = newNode;

  //   return this;
  // }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  includes(value) {
    let nodePosition = this.head;
    while (nodePosition.value !== value) {
      if (!nodePosition.next) {
        return false;
      }
      nodePosition = nodePosition.next;
    }
    return true;
  }

  containEntry(value) {
    let nodePosition = this.head;

    while (Object.keys(nodePosition.value)[0] !== value) {
      if (!nodePosition.next) {
        return false;
      }
      nodePosition = nodePosition.next;
    }
    return nodePosition.value;
  }
  containValue(value) {
    let nodePosition = this.head;
    while (Object.keys(nodePosition.value)[0] !== value) {
      if (!nodePosition.next) {
        return false;
      }
      nodePosition = nodePosition.next;
    }
    return Object.values(nodePosition.value)[0];
  }

  toString() {
    let nodePosition = this.head;
    let stringText = '';
    while (nodePosition.next) {
      stringText = stringText + `{${nodePosition.value}} -> `;
      nodePosition = nodePosition.next;
    }
    stringText = stringText + `{${nodePosition.value}} -> NULL`;
    return stringText;
  }

  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    if (!this.head.next) {
      this.head.next = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    return this;
  }

  insertAfter(value, newValue) {
    let nodePosition = this.head;
    while (nodePosition.value !== value) {
      if (!nodePosition.next) {
        if (nodePosition.value === value) {
          break;
        } else {
          return 'The number is not in the node';
        }
      }
      nodePosition = nodePosition.next;
    }
    let newNode = new Node(newValue);
    if (!nodePosition.next) {
      nodePosition.next = newNode;
      this.tail = newNode;
    } else {
      let nextNode = nodePosition.next;
      nodePosition.next = newNode;
      newNode.next = nextNode;
    }
  }

  insertBefore(value, newValue) {
    let nodePosition = this.head;
    let saveNodeBefore = this.head;
    while (nodePosition.value !== value) {
      if (!nodePosition.next) {
        if (nodePosition.value === value) {
          break;
        } else {
          return 'The number is not in the node';
        }
      }
      saveNodeBefore = nodePosition;
      nodePosition = nodePosition.next;
    }
    let newNode = new Node(newValue);
    if (saveNodeBefore === nodePosition) {
      saveNodeBefore.next = newNode;
      this.head = newNode;
    } else {
      saveNodeBefore.next = newNode;
      newNode.next = nodePosition;
    }
  }

  // kthFromEnd(number) {
  //   if (number < 0) {
  //     return null;
  //   }
  //   if (!this.head) {
  //     return null;
  //   }
  //   if (number !== parseInt(number)) {
  //     return null;
  //   }
  //   let arr = this.toString().split(' -> ');
  //   arr.pop();
  //   console.log(arr);
  //   if (number >= arr.length) {
  //     return null;
  //   }
  //   return parseInt(arr[arr.length - number - 1].replace(/\D/g, ''));
  // }

  kthFromEnd(k) {
    if (!this.head || k < 0 || k >= this.length) {
      return 'exception';
    }
    if ((k === 0)) {
      if(!this.tail){this.tail=this.head;}
      return this.tail.value;
    }
    if ((k === this.length - 1)) {
      return this.head.value;
    }

    let currectValue = this.head;

    for (let i = this.length - 1; i > k; i--) {
      currectValue = currectValue.next;
    }
    return currectValue.value;
  }

}
function zipLists(list1, list2) {
  let curValue1 = list1.head;
  let curValue2 = list2.head;
  let list3 = new LinkedList();
  while (curValue1 || curValue2) {
    if (curValue1 !== null) {
      list3.append(curValue1.value);
      curValue1 = curValue1.next;
    }
    if (curValue2 !== null) {
      list3.append(curValue2.value);
      curValue2 = curValue2.next;
    }
  }
  return list3.toString();


}
module.exports ={
  LinkedList,
  zipLists,
};

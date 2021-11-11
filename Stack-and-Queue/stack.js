const Node = require('./Node');


class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {

    if (this.isEmpty()) {
      const newNode = new Node(value);
      this.top = newNode;

    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }

  }

  pop() {

    if (this.isEmpty()) {
      return 'exception';
    }

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }



  peek() {
    if (this.isEmpty()) {
      return 'exception';
    }
    return this.top.value;
  }


  isEmpty() {
    return this.top === null;
  }
}


module.exports = Stack;

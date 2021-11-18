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

  getMax(){
    if(this.isEmpty()){return 'exception';}
    let currentNode=this.top;
    let max=currentNode.value;
    while(currentNode.next){
      if(currentNode.next.value>max){
        max=currentNode.next.value;
      }
      currentNode=currentNode.next;
    }
    return max;
  }
}


module.exports = Stack;

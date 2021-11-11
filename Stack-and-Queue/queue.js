const Node=require('./Node');

class Queue{

  constructor(){
    this.front=null;
    this.rear=null;
    this.length=0;
  }

  isEmpty(){
    return this.length===0;
  }
  peek(){
    if(this.isEmpty()){return'exception';}else{return this.front.value;}
  }
  enqueue(value){
    const newNode=new Node(value);
    if(this.isEmpty()){
      this.front=newNode;
      this.rear=newNode;
      this.length++;
    }else{
      this.rear.next=newNode;
      this.rear=newNode;
      this.length++;
      return this.front;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'exception';
    }

    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length -= 1;
    return temp.value;

  }
}

module.exports = Queue;

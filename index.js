'use strict';

const {LinkedList} = require('./linked-list/LinkedList');
const Queue=require('./Stack-and-Queue/queue')
const Stack=require('./Stack-and-Queue/stack')


// const newList1=new LinkedList();
// newList1.append(1);
// newList1.append(3);
// newList1.append(5);
// newList1.append(7);
// newList1.append(9);
// newList1.append(11);
// newList1.append(13);

// const newList2=new LinkedList();
// newList2.append(2);
// newList2.append(4);
// newList2.append(6);
// newList2.append(8);

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
  return list3.toString();}




function reveredList(list) {
  let node = list.head;
  const list2 = new LinkedList();
  while (node) {
    list2.insert(node.value);
    node = node.next;
  }
  list=list2;
  return list;
}

// console.log(newList1);
// console.log(newList2);
// console.log(zipLists(newList1,newList2));
// console.log(reveredList(newList1));


// const newStack = new Stack();


// newStack.push(1);
// newStack.push(2);
// newStack.push(3);

// console.log(newStack.peek()); // 3
// newStack.pop();
// newStack.pop();
// console.log(newStack.peek()); // 2
// newStack.pop();
// newStack.pop(); // should console log the error message

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
console.log(queue);

'use strict';

const {LinkedList} = require('./linked-list/LinkedList');
const Queue=require('./Stack-and-Queue/queue');
const Stack=require('./Stack-and-Queue/stack');
const PseudoQueue=require('./Stack-and-Queue/pseudo-queue');
const {BT,Node}=require('./trees/Binary-tree');
const {BSearchT}=require('./trees/Binary-Search-tree');
const breadthFirst=require('./trees/tree-breadth-first');
const fizzBuzz=require('./trees/fizz-buzz-tree');
const InsertionSort=require('./InsertionSort/InsertionSort');



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

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log(queue);

// queue.dequeue();
// console.log(queue);


// const test=new PseudoQueue;
// test.enqueue(1);
// test.enqueue(2);
// test.enqueue(3);
// test.enqueue(4);
// console.log(test.dequeue());
// console.log(test.enqueue(5));
// console.log(test.dequeue());



function stackQueueBrackets(string) {
  const arr = [];
  const open = ['(', '{', '['];
  const closed = [')', '}', ']'];
  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i])) {
      arr.push(string[i]);
    }
    if (closed.includes(string[i])) {
      const temp = open[closed.indexOf(string[i])];
      if (arr[arr.length - 1] === temp) {
        arr.splice(-1, 1);
      } else {
        arr.push(string[i]);
      }
    }
  }
  return arr.length === 0 ? true : false;
}
// console.log(stackQueueBrackets('{he(ll)o}'));

// const newStack = new Stack();

// newStack.push(1);
// newStack.push(3);
// newStack.push(2);
// newStack.push(6);
// newStack.push(4);
// console.log(newStack.getMax());

// string = ABCDE
// k = 3

// function DuckDuckGoose(string,k){
//   let queue=new Queue;
//   let vipCharacter=string[k];

//   for(let i=0;i<string.length;i++){
//     queue.enqueue(string[i]);
//   }

//   for(let i=0;i<string.length;i++){
//     if(vipCharacter===string[i]){
//       queue.enqueue(string[i]);
//       //A->B->C->D->E->C
//     }
//     queue.dequeue();
//   }

//   return queue.dequeue();
// }




let newQueue = new Queue();
let dequeueValue = '';
function duckDuckGoose (listOfString , k){
  if (listOfString.length !== 0){
    for (let i=0; i<listOfString.length; i++){
      newQueue .enqueue (listOfString[i]);
    }
  }else {
    return 'empty list !';
  }
  while (newQueue.length !== 1 ){
    for (let y =0 ; y< k-1; y++){
      dequeueValue = newQueue .dequeue();
      newQueue .enqueue(dequeueValue);
    }
    newQueue .dequeue();
  }
  return `last Person is : ${newQueue .dequeue()} `;
}
// console.log(duckDuckGoose('ABCDEF',3));



const tree=new BSearchT();
tree.root=new Node(5,new Node(14,new Node(4),new Node(3)));
// console.log(tree.findMaximum());

// console.log(tree.root.right.left);

// console.log(breadthFirst(tree));

// console.log(fizzBuzz(tree));
// console.log(tree.oddNumbers());

let array=[1,12,33,24,51,16,7,8];
console.log(InsertionSort(array));

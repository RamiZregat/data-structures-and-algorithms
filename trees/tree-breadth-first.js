'use strict';
const Queue = require('../Stack-and-Queue/queue');

function breadthFirst(tree){
  if(!tree || !tree.root ){return 'exception';}
  const arr=[];
  const queue= new Queue;

  let temp = tree.root;
  queue.enqueue(temp);

  while (queue.front) {
    temp = queue.dequeue();
    arr.push(temp.value);
    if (temp.left) queue.enqueue(temp.left);
    if (temp.right) queue.enqueue(temp.right);
  }
  return arr;
}
module.exports=breadthFirst;

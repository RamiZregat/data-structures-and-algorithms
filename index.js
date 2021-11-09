'use strict';

const LinkedList = require('./linked-list/LinkedList');


const newList1=new LinkedList();
newList1.insert(1);
newList1.insert(3);
newList1.insert(5);
newList1.insert(7);
newList1.insert(9);
newList1.insert(11);
newList1.insert(13);

const newList2=new LinkedList();
newList2.insert(2);
newList2.insert(4);
newList2.insert(6);
newList2.insert(8);


const newList3=new LinkedList();
newList3.zipLists(newList1,newList2);

console.log(newList1);
console.log(newList2);
console.log(newList3.zipLists(newList1,newList2));

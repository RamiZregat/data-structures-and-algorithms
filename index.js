'use strict';

const LinkedList = require('./linked-list/LinkedList');


const newList1=new LinkedList();
newList1.append(1);
newList1.append(3);
newList1.append(5);
newList1.append(7);
newList1.append(9);
newList1.append(11);
newList1.append(13);

const newList2=new LinkedList();
newList2.append(2);
newList2.append(4);
newList2.append(6);
newList2.append(8);



console.log(newList1);
console.log(newList2);
console.log(LinkedList.zipLists(newList1,newList2));

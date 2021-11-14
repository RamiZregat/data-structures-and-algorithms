'use strict';
const PseudoQueue = require('../pseudo-queue');

describe('Pseudo-Queue', ()=>{
  it('Enqueue', ()=>{
    const pQueue = new PseudoQueue();
    pQueue.enqueue(1);
    pQueue.enqueue(2);
    pQueue.enqueue(3);
    expect(pQueue.stack1.top.value).toEqual(1);
    expect(pQueue.stack1.top.next.value).toEqual(2);
    expect(pQueue.stack1.top.next.next.value).toEqual(3);
  });

  it('Dequeue', ()=>{
    const pQueue = new PseudoQueue();
    pQueue.enqueue(1);
    pQueue.enqueue(2);
    pQueue.enqueue(3);
    expect(pQueue.dequeue()).toEqual(1);
    expect(pQueue.dequeue()).toEqual(2);
    expect(pQueue.dequeue()).toEqual(3);
    expect(pQueue.dequeue()).toEqual('exception');
  });
});

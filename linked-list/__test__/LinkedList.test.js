'use strict';

const LinkedList = require('../LinkedList');

describe('Linked List Test', () => {
  it('Test if creation of linkedlist works', () => {
    let newLinkedList = new LinkedList();
    expect(newLinkedList.head).toBeNull();
    expect(newLinkedList.tail).toBeNull();
  });

  it('Test if insertion in linkedlist works', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    // expect(newLinkedList.head.value).toEqual(1);
    expect(newLinkedList.head).not.toBeNull();
  });

  it('Test if The head property will properly point to the first node in the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    expect(newLinkedList.head.value).toEqual(1);
  });
  it('Test if Can properly insert multiple nodes into the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insert(3);
    newLinkedList.insert(4);
    expect(newLinkedList.head.next).not.toBeNull();
  });
  it('Test if Can return true when finding a value within the linked list that exists', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    expect(newLinkedList.includes(1)).toBeTruthy();
  });

  it('Test if Can return false when searching for a value in the linked list that does not exist', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    expect(newLinkedList.includes(2)).toBeFalsy();
  });
  it('Test if Can properly return a collection of all the values that exist in the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insert(3);
    expect(newLinkedList.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
  });

  it('Test if Can successfully add a node to the end of the linked list',()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.append(3);
    expect(newLinkedList.tail.value).toEqual(3);
  });

  it('Test if Can successfully add multiple nodes to the end of a linked list',()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.append('Happy Path');
    expect(newLinkedList.tail.value).toEqual('Happy Path');
    newLinkedList.append(3);
    expect(newLinkedList.tail.value).toEqual(3);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list',()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insertBefore(2,'Happy Path');
    expect(newLinkedList.head.next.value).toEqual('Happy Path');
  });

  it('Can successfully insert a node before the first node of a linked list',()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insertBefore(1,'Happy Path');
    expect(newLinkedList.head.value).toEqual('Happy Path');
  });

  it('Can successfully insert after a node in the middle of the linked list',()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insert(3);
    newLinkedList.insertAfter(2,'Happy Path');
    expect(newLinkedList.head.next.next.value).toEqual('Happy Path');
  });

  it('Can successfully insert a node after the last node of the linked list',()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insertAfter(2,'Happy Path');
    expect(newLinkedList.tail.value).toEqual('Happy Path');
  });
});

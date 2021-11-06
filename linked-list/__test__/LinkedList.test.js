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
});

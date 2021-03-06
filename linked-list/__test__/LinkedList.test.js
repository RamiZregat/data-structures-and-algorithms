'use strict';

const LinkedList = require('../LinkedList').LinkedList;
const zipLists = require('../LinkedList').zipLists;

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
    expect(newLinkedList.toString()).toEqual('{3} -> {2} -> {1} -> NULL');
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
    newLinkedList.append(1);
    newLinkedList.append(2);
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
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.insertAfter(2,'Happy Path');
    expect(newLinkedList.tail.value).toEqual('Happy Path');
  });

});
describe('Linked List kth',()=>{

  it(('test where the number is greater than the length of the linked list'),()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insert(3);
    expect(newLinkedList.kthFromEnd(5)).toEqual('exception');
  });

  it(('test where the number and the length of the linked list are the same'),()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insert(3);
    expect(newLinkedList.kthFromEnd(3)).toEqual('exception');
  });

  it(('test Where the number is not a positive integer'),()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    newLinkedList.insert(3);
    expect(newLinkedList.kthFromEnd(-1)).toEqual('exception');
  });

  it(('test Where the linked list is of a size 1'),()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    expect(newLinkedList.kthFromEnd(0)).toEqual(1);
  });

  it(('test where the number is not at the end, but somewhere in the middle of the linked list'),()=>{
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    newLinkedList.append(6);
    expect(newLinkedList.kthFromEnd(3)).toEqual(3);
  });
});
describe('Linked-List-Zip', () => {
  it('dsgdfgd', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.append('a');
    ll1.append('b');
    ll1.append('c');
    ll2.append('1');
    ll2.append('2');
    ll2.append('3');
    let list = zipLists(ll1, ll2);
    expect(list.length).toBeGreaterThan(0);
    expect(list).toEqual('{a} -> {1} -> {b} -> {2} -> {c} -> {3} -> NULL');
  });
});

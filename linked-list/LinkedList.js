"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //   ----------------------
  //   Solution without Tail
  //   ----------------------
  //   insert(value){
  //     const newNode= new Node(value);
  //     if(!this.head){
  //       this.head=newNode;
  //       return this;
  //     }
  //     let currentNode=this.head;

  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next=newNode;
  //     return this;
  //   }

  // }
  //   ----------------------
  //   Solution with Tail
  //   ----------------------
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    if (!this.head.next) {
      this.head.next = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    return this;
  }

  includes(value) {
    let nodePosition = this.head;
    while (nodePosition.value !== value) {
      if (!nodePosition.next) {
        if (nodePosition.value === value) {
          return true;
        } else {
          return false;
        }
      }
      nodePosition = nodePosition.next;
    }
    return true;
  }

  toString() {
    let nodePosition = this.head;
    let stringText = "";
    while (nodePosition.next) {
      stringText = stringText + `{${nodePosition.value}} -> `;
      nodePosition=nodePosition.next;
    }
    stringText= stringText + `{${nodePosition.value}} -> NULL`;
    return stringText;
  }

  append(value){
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    if (!this.head.next) {
      this.head.next = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    return this;
  }

  insertAfter(value,newValue){
    let nodePosition = this.head;
    while (nodePosition.value !== value) {
      if (!nodePosition.next) {
        if (nodePosition.value === value) {
          break;
        } else {
          return 'The number is not in the node';
        }
      }
      nodePosition = nodePosition.next;
    }
    let newNode = new Node(newValue);
    if(!nodePosition.next){
      nodePosition.next=newNode;
      this.tail=newNode;
    }else{
      let nextNode = nodePosition.next;
      nodePosition.next = newNode;
      newNode.next=nextNode;
    }
  }

  insertBefore(value,newValue){
    let nodePosition = this.head;
    let saveNodeBefore = this.head;
    while (nodePosition.value !== value) {
      if (!nodePosition.next) {
        if (nodePosition.value === value) {
          break;
        } else {
          return 'The number is not in the node';
        }
      }
      saveNodeBefore=nodePosition;
      nodePosition = nodePosition.next;
    }
    let newNode = new Node(newValue);
    if(saveNodeBefore===nodePosition){
      saveNodeBefore.next = newNode;
      this.head=newNode;
    }else{
      saveNodeBefore.next = newNode;
      newNode.next=nodePosition;
    }
  }

}
module.exports = LinkedList;

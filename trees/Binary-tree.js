'use strict';
class Node {
  constructor(value,left=null,right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BT {
  constructor(root = null) {
    this.root = root;
  }

  // root >> left >> right
  preOrder() {
    if (!this.root) console.log('can not traverse an empty tree');
    let arr = [];
    const _traverse = (node) => {
      arr.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return arr;
  }

  // left >> root >> right
  inOrder() {
    if (!this.root) throw new Error('can not traverse an empty tree');
    let arr = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      arr.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return arr;
  }

  // left >> right >> root
  postOrder() {
    if (!this.root) throw new Error('can not traverse an empty tree');
    let arr = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      arr.push(node.value);
    };
    _traverse(this.root);
    return arr;
  }
  findMaximum(){
    if(!this.root){return 'exception';}
    let maxNumber=this.root.value;
    const _traverse=(node)=>{
      if(node.value>maxNumber){maxNumber=node.value;}
      if(node.left){_traverse(node.left);}
      if(node.right){_traverse(node.right);}
    };
    _traverse(this.root);
    return maxNumber;
  }
}
module.exports={
  Node,
  BT,
};


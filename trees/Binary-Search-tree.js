'use strict';
const {BT,Node }= require('./Binary-tree');

class BSearchT extends BT {
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    const _traverse = (node, val) => {
      if (val < node.value) {
        if (node.left === null) return (node.left = new Node(val));
        _traverse(node.left, val);
      }
      if (val > node.value) {
        if (node.right === null) return (node.right = new Node(val));
        _traverse(node.right, val);
      }
    };

    _traverse(this.root, value);
  }

  contains(val) {
    if (!this.root) throw new TypeError('Empty Tree');
    const _traverse = (node) => {
      if (node.value === val) return true;

      if (val > node.value && node.right) return _traverse(node.right);

      if (val < node.value && node.left) return _traverse(node.left);

      return false;
    };
    return _traverse(this.root);
  }


  oddNumbers() {
    if (!this.root) throw new TypeError('Empty Tree');
    let sum=0;
    const _traverse = (node) => {
      if (node.value % 2 !==0) {sum=sum+node.value;}

      if ( node.right) return _traverse(node.right);

      if ( node.left) return _traverse(node.left);

    };
    _traverse(this.root);
    return(sum);
  }
}

module.exports={
  BSearchT,
};

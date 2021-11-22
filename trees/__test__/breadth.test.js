'use strict';

const breadthFirst=require('../tree-breadth-first');
const {BT,Node}=require('../Binary-tree');

describe('Breadth First',()=>{
  it('return error when empty tree', () => {
    const tree = new BT();

    expect(breadthFirst(tree)).toBe('exception');
  });

  it('return error when no argument exist', () => {
    expect(breadthFirst()).toBe('exception');
  });

  it('return in the right order', () => {
    let tree;
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BT(one);
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 6, 4, 5, 7, 8, 9]);
  });
});

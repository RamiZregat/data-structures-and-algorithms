'use strict';
const {Node,BT} = require('../Binary-tree');
const fizzBuzz = require('../fizz-buzz-tree');

describe('Fizz Buzz Tree', () => {




  it('Produces expected output', () => {
    let tree=new BT();
    tree.root=new Node(5,new Node(15,new Node(4),new Node(3)));
    let expected=['Buzz','FizzBuzz','4','Fizz'];
    expect(fizzBuzz(tree).preOrder()).toEqual(expected);

  });
  it('return exception if tree is empty', () => {
    const emptytree=new BT;
    expect(fizzBuzz(emptytree)).toEqual('exception');
  });
});

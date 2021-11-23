'use strict';

function fizzBuzz(tree){

  if(!tree || !tree.root){return 'exception';}
  const secondTree=tree;
  if(secondTree.root.value % 5 === 0 && secondTree.root.value % 3 === 0){secondTree.root.value='FizzBuzz';}
  if(secondTree.root.value % 3 === 0){secondTree.root.value='Fizz';}
  if(secondTree.root.value % 5 === 0){secondTree.root.value='Buzz';}
  if(secondTree.root.value % 5 !== 0 && secondTree.root.value % 3 !== 0){secondTree.root.value=`${secondTree.root.value}`;}
  const _traverse=(node)=>{
    if(node.left){
      if(node.left.value % 5 === 0 && node.left.value % 3 === 0){node.left.value='FizzBuzz';}
      if(node.left.value % 3 === 0){node.left.value='Fizz';}
      if(node.left.value % 5 === 0){node.left.value='Buzz';}
      if(node.left.value % 5 !== 0 && node.left.value % 3 !== 0){node.left.value=`${node.left.value}`;}
      _traverse(node.left);
    }
    if(node.right){
      if(node.right.value % 5 === 0 && node.right.value % 3 === 0){node.right.value='FizzBuzz';}
      if(node.right.value % 3 === 0){node.right.value='Fizz';}
      if(node.right.value % 5 === 0){node.right.value='Buzz';}
      if(node.right.value % 5 !== 0 && node.right.value % 3 !== 0){node.right.value=`${node.right.value}`;}
      _traverse(node.right);
    }
  };
  _traverse(secondTree.root);
  return secondTree;
}

module.exports=fizzBuzz;



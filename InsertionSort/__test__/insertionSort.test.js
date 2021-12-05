'use strict';

const insertionSort=require('../InsertionSort');

describe('Insertion Sort Test',()=>{
  it('Testing if insertion works',()=>{
    let array=[8,4,23,42,16,15];
    let correctArray=[4,8,15,16,23,42];
    expect(insertionSort(array)).toEqual(correctArray);
  });
  it('Testing if insertion with empty array',()=>{
    let array=[];
    expect(insertionSort(array)).toEqual([]);
  });
  it('Testing if insertion with empty parameter',()=>{
    expect(insertionSort()).toEqual('exception');
  });
});

'use strict';
const check = require('../stack-queue-brackets');

describe('Stack Queue Brackets',()=>{
  it('return true when the brackets are balanced',()=>{
    const test1 = '(){no}[]';
    const test2 = '(hello){[]yes}';
    const test3 = '({[rami]})';
    expect(check(test1)).toBeTruthy();
    expect(check(test2)).toBeTruthy();
    expect(check(test3)).toBeTruthy();
  });

  it('return false when the brackets are unbalanced',()=>{
    const test1 = '({)no[}]';
    const test2 = '(hello)}[]yes}';
    const test3 = '({[rami]}';
    expect(check(test1)).toBeFalsy();
    expect(check(test2)).toBeFalsy();
    expect(check(test3)).toBeFalsy();
  });
});

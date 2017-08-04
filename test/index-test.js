'use strict';

const expect = require('expect');
const printUpper = require('../index.js');

describe('test printUpper', () => {
  it('should return IM NOT A DOUCHE', () => {
    process.argv = ['node', 'index.js', 'im', 'not', 'a', 'douche'];
    expect(printUpper()).toEqual('IM NOT A DOUCHE');
  });
});

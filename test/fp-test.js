'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');
// create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` using  call, bind, and apply

// map method creates a new array with the results of calling a provided function on every element of the calling array
describe('testing map', () => {
  it('should return [2, 3, 4, 5]', () => {
    expect(fp.map([1, 2, 3, 4], ele => ele + 1)).toEqual([2, 3, 4, 5]);
  });
  it('should return [\'hi!\', \'bye!\']', () => {
    expect(fp.map(['hi', 'bye'], ele => ele + '!')).toEqual(['hi!', 'bye!']);
  });
});

// filter method creates a new array with all elements that pass the test implemented by the provided function
describe('testing filter', () => {
  it('should return [354, 220, 190934]', () => {
    expect(fp.filter([1, 354, 220, -3, 190934], ele => ele > 100)).toEqual([354, 220, 190934]);
  });
  it('should return [2, 88, 12]', () => {
    expect(fp.filter([2, 5, 7, 88, 12], ele => ele % 2 === 0)).toEqual([2, 88, 12]);
  });
});

// reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
describe('testing reduce', () => {
  it('should return 45', () => {
    expect(fp.reduce([10, 5, 20, 10], [(a, c) => a + c])).toBe(45);
  });
  it('should return 26', () => {
    expect(fp.reduce([5, 6, 7, 8], [(a, c) => a + c])).toBe(26);
  });
});

// concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
describe('testing concat', () => {
  it('should return [\'bitty\', \'boop\']', () => {
    expect(fp.concat(['bitty'], ['boop'])).toEqual(['bitty', 'boop']);
  });
});

// splice() method changes the contents of an array by removing existing elements and/or adding new elements.

describe('testing splice', () => {
  it('should return [3]', () => {
    expect(fp.splice([1, 2, 3, 4], 2, 1)).toEqual([3]);
  });
});

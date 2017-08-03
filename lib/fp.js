'use strict';

const fp = module.exports = {};

// create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` using  call, bind, and apply

// map method creates a new array with the results of calling a provided function on every element of the calling array
fp.map = (list, callback) => {
  return Array.prototype.map.call(list, callback);
};

// filter method creates a new array with all elements that pass the test implemented by the provided function
fp.filter = (list, condition) => {
  return Array.prototype.filter.call(list, condition);
};

// reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
fp.reduce = (acc, cur) => {
  return Array.prototype.reduce.apply(acc, cur);
};

// concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
fp.concat = (list1, list2) => {
  return Array.prototype.concat.call(list1, list2);
};

// splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// spread syntax
fp.splice = (list, ...args) => {
  return Array.prototype.splice.apply(list, args);
};

'use strict';

const fp = require('./lib/fp.js');

// make a CLI `index.js` that will use your new `map` function to UpperCase all command line args and print them to the screen

let printUpper = module.exports = () => {
  let argList = fp.splice(process.argv, 2);
  let upperList = fp.map(argList, ele => ele.toUpperCase());
  let upperString = upperList.join(' ');
  console.log(upperString);
  return upperString;
};

printUpper();

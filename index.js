'use strict';

const fp = require('./lib/fp.js');

// make a CLI `index.js` that will use your new `map` function to UpperCase all command line args and print them to the screen

function printUpper() {
  let args = fp.splice(process.argv, 2);
  let upper = fp.map(args, arg => arg.toUpperCase());
  let result = upper.join(' ');
  console.log(result);
}

printUpper();

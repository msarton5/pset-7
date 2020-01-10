function commonEnd(a, b) {

  if (!a || a.length === 0 || !b || b.length === 0) {
      return false;
  } else {

    const firstValueA = a[0];
    const firstValueB = b[0];

    const lastValueA = a[a.length - 1];
    const lastValueB = b[b.length - 1];

    if (firstValueA === firstValueB || lastValueA === lastValueB) {
      return true;
    } else {
      return false;
    }

  }
}

function endsMeet(values, n) {
  let array = [];
}

function difference(numbers) {
  let empty = [];
}

function max(number) {
  let empty = [];
}

function middle(values) {
  let empty = [];
}

function increasing(numbers) {
  let empty = [];
}

function everywhere(values, x) {
  let empty = [];
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};

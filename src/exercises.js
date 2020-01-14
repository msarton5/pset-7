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

let values = [];

if (values.length === 0 || values.length < n || !Number.isInteger(n) || n < 0)
  return emptyValues = [];
} else {

}

function difference(numbers) {
  let numbers = [];
}

function max(number) {
  let number = [];
}

function middle(values) {
  let values = [];
}

function increasing(numbers) {
  let increasing = [];
}

function everywhere(values, x) {
  let values = [];
}

function consecutive(numbers) {
  let numbers = [];
}

function balance(numbers) {
  let numbers = [];
  console.log("test");
}

function clumps(values) {
  let values = [];
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

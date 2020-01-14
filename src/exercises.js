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

if (values.length === 0 || values.length < n || !Number.isInteger(n) || n < 0){
  return emptyValues = [];
} else {
  const firstValue = values[0];
  const lastValue = values[values.length - 1];

  values.unshift(firstValue);
  values.push(lastValue);

  return(values);
}

function difference(numbers) {

if (numbers.length === 0 || numbers.length < 1 || Number.isNaN(numbers)) {
  return "undefined";
}

}

function max(number) {

if (number.length % 2 == 0 || Number.isNaN(number) || number.length < 3 || number.length === 0) {
  return "undefined";
}

}

function middle(values) {

if (values.length % 2 == 0 || values.length < 3 || values.length === 0) {
  return "undefined";
}

}

function increasing(numbers) {

if (numbers.length % 2 == 0 || Number.isNaN(numbers) || !Number.isInteger(numbers) || numbers.length === 0) {
  return "false";
}

}

function everywhere(values, x) {

if (values.length === 0 || values.length < 1 || x.length === 0){
  return "false";
}

}

function consecutive(numbers) {

}

function balance(numbers) {
  console.log("test");
}

function clumps(values) {

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

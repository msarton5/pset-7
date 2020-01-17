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
  var returnMe = [];
  if (values === null || values.length === 0 || values.length < n || !Number.isInteger(n) || n < 0){
    return empty = [];
  } else if (n === 0) {
    return values;
  } else {

    for (var i = 0; i < n; i++) {
      returnMe.push(values[i]);
    }
    for (var i = 0; i < n; i++) {
      returnMe.push(values[((values.length - n) + i)])
    }
  }

  return returnMe;
}

function difference(numbers) {
  if (!numbers || numbers.length < 1 || !numbers.every(isNumber)) {
    return undefined;
  } else {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return max - min;
  }
}

function max(number) {

if (!number || number.length % 2 == 0 || !number.every(isNumber) || number.length < 3) {
  return undefined;
} else {
  
  const first = number[0];
  const middle = number[(number.length - 1)/ 2];
  const last = number[number.length -1];

  var newArray = [first, middle, last];

  const greatest = Math.max(...newArray);

  return greatest;
}

}

function middle(values) {

if (values.length % 2 == 0 || values.length < 3 || values.length === 0) {
  return undefined;
}

}

function increasing(numbers) {

if (numbers.length % 2 == 0 || Number.isNaN(numbers) || !Number.isInteger(numbers) || numbers.length === 0) {
  return false;
}

}

function everywhere(values, x) {

if (values.length === 0 || values.length < 1 || x.length === 0){
  return false;
}

}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3 || Number.isNaN(numbers) || !Number.isInteger(numbers)) {

    return false;
  } else {

      for (i = 0; i < numbers.length; i++){
          if (numbers[i] % 2 == 0 && (numbers[i + 1]) % 2 == 0 && (numbers[i + 2]) % 2 == 0) {
  console.log(numbers);
            return true;
          } else if (numbers[i] % 2 == 1 && (numbers[i + 1]) % 2 == 1 && (numbers[i + 2]) % 2 == 1) {
            return true;
          } else {
            return false;

          }
      }
  }

  }

function balance(numbers) {
  console.log("test");
}

function clumps(values) {

}

///

function isNumber(value) {
  return typeof value === "number";
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

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
  if (!values || values.length < n || !Number.isInteger(n) || n < 0){
      return returnMe;
  } else if (n === 0) {
    return returnMe;
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

  var newArray = [];

  if (!values || values.length % 2 == 0 || values.length < 3) {
    return newArray;
  } else {
    const middle = values[(values.length - 1)/ 2];
    const first = values[((values.length - 1)/ 2) - 1];
    const last = values[((values.length - 1)/ 2) + 1];

    newArray.push(first);
    newArray.push(middle);
    newArray.push(last);

    return newArray;
  }

}

function increasing(numbers) {

  if (numbers == undefined || numbers.length < 3 || !numbers.every(isNumber) ||  !numbers.every(isAnInteger)) {
    return false;
  }

  var counter = 0;
  var currentNum = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (i == 0) {
      counter = 1;
      currentNum = numbers[i];
    } else if (numbers[i] == currentNum + 1) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter == 3) {
      return true;
    }
    currentNum = numbers[i];
  }

  return false;
}

function everywhere(values, x) {

  var evaluate = true;

  if (!values || values.length < 1 || x == 0) {
    return false;
  } else {

    for (var i = 0; i < values.length; i++){
      if (values[i] !== x && values[i + 1] !== x && values[i - 1] !== x) {
        var evaluate = false;
      }
    }

    if (evaluate) {
      return true;
    } else {
      return false;
    }
  }

}

function consecutive(numbers) {

// var evaluate = true;

  if (!numbers || numbers.length < 3 || !numbers.every(isNumber) ||  !numbers.every(isAnInteger)) {
    return false;
  } else {
    var correct = 0
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0 && numbers[i + 1] % 2 == 0 && numbers[i + 2] % 2 == 0) {
          correct += 1;
          // var evaluate = false;
      } else if (numbers[i] % 2 == 1 && numbers[i + 1] % 2 == 1 && numbers[i + 2] % 2 == 1) {
          correct += 1;
          // var evaluate = false;
      }
    }
    if (correct > 0) {
      return true;
    } else {
      return false;
    }
  }
}

function balance(numbers) {
  if (!numbers || numbers.length < 2 || !numbers.every(isNumber) || !numbers.every(isAnInteger)){
    return false;
  } else {

    var left = 0;
    var right = 0;

    for (var x = 0; x < numbers.length; x++) {
      right += numbers[x];
    }

    for (var i = 0; i < numbers.length - 1; i++) {

        if (left != right) {
          left += numbers[i];
          right -= numbers[i];
        }
    }
    return left == right;
  }
}

function clumps(values) {
    if (!values) {
      return -1;
    } else {

      var count = 0;

      for (var i = 0; i < values.length; i++) {
        if (values[i] !== values[i - 1] && values[i] == values[i + 1]) {
          var count = count + 1;
        }
      }

return count;
    }
}

///

function isNumber(value) {
  return typeof value === "number";
}

function isAnInteger(numbers) {
  //return typeof numbers === "integer";
  for (var i = 0; i < numbers.length; i++) {
    if (!(numbers[i] % 1 == 0)) {
      return false;
    }
  }
  return true;
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

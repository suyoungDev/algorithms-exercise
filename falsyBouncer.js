// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      // 이거 자체만으로도 falsy인지 truthy인지 알수있다!
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, 'ate', '', false, 9]);

// another answer

function bouncer(arr) {
  return arr.filter(Boolean);
}

// arr.filter( function(x) { return Boolean(x); });
// Boolean() is also a function that return truthy when true;

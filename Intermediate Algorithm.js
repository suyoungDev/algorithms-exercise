function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  
  sumAll([1, 4]);


  const sumAll = arr => {
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };
  

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
  }
  


function sumAll([ first, last ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}


function rangeOfNumbers(startNum, endNum) {
      if (endNum - startNum === 0){
        return [endNum];
      } else{
        const number = rangeOfNumbers(startNum,endNum -1 );
        number.push(endNum);
        return number;
      }
}



function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



  function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }



  function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }

  

  function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }

  const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));



  function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  




  function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =
  String.prototype.capitalize ||
  function() {
    return this[0].toUpperCase() + this.slice(1);
  };

const Util = (function() {
  // Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.

    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }



  function myReplace(str, before, after) {
    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
      // split the source and target strings to array of letters
      var targetArr = target.split("");
      var sourceArr = source.split("");
      // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
      for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
        // find out the casing of every letter from sourceArr using regular expression
        // if sourceArr[i] is upper case then convert targetArr[i] to upper case
        if (/[A-Z]/.test(sourceArr[i])) {
          targetArr[i] = targetArr[i].toUpperCase();
        }
        // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
        else targetArr[i] = targetArr[i].toLowerCase();
      }
      // join modified targetArr to string and return
      return targetArr.join("");
    }
  
    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  Code Explanation

  



  function myReplace(str, before, after) {
    const myArr = str.split(" ");
    const [wordToReplace] = myArr.filter(item => item === before);
    return wordToReplace[0].toUpperCase() !== wordToReplace[0]
      ? myArr.map(item => (item === before ? after : item)).join(" ")
      : myArr
          .map(item =>
            item === before ? after[0].toUpperCase() + after.slice(1) : item
          )
          .join(" ");
  }
  
  // test:
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
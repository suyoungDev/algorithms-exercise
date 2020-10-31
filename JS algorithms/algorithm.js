function uniteUnique(...arr) {
    let flatArr = [].concat(...arr);
  
    return [...new Set(flatArr)];
}

function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
      concatArr = concatArr.concat(arguments[i]);
      i++;
    }
    uniqueArray = concatArr.filter(function(item, pos) {
      return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
}
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


  function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
//    let args = Array.from(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA, arrB) {
      //Apply filter to remove the duplicate elements in the array
      return arrA.concat(
        arrB.filter(function(i) {
          return arrA.indexOf(i) === -1;
        })
      );
    });
  
    return newArr;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
}

function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
}


function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");



  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");



  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  // test here
  convertHTML("Dolce & Gabbana");
  
  
  
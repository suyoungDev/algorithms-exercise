
// falsy: false값인 것
// false
// 0(zero. not string "0")
// '' or "" (empty stirng)
// null
// undefined
// NaN



function truthCheck(collection, pre) {
  let isTruthy = true;
  for (const obj of collection){
    if (!obj[pre]){
      isTruthy = false;  //  or: return false (break구문 제외)
      break;
    }
  } 
  return isTruthy;
}


// refactor:
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

// ES6
const truthCheck =(collection, pre)=> collection.every(obj=>obj[pre])


// another way
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}


// another2 ?

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;

  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) 
    && Boolean(collection[c][pre])) {
      counter++;
    }
  }

  // Outside the loop, check to see 
  // if we got true for all of them and return true or false
  return counter == collection.length;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

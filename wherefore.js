function whatIsInAName(collection, source) {
  const arr = [];
// we need access to all the key value pairs of the second argument,
// make an array out of all the key of the 2nd object/
// the way do that is a built-in function in JS is called object.keys

const keys = Object.keys(source);
// this way you can see the key of the object named 'source'..
// object= key: value
// return: "last"


// traditional for-loop is
// not cleanest way to do. the better way is for-of loop
//  for( let i =0; i<collection.length; i++){ }

for (const obj of collection) {
  let hasAllKeyValuePairs = true;
  // we want to make sure that 
  // it has all the key value pair from the source
  for (const key of keys){
    if (obj[key] !== source[key]){
      hasAllKeyValuePairs = false;
      break;
    }
  }

  if (hasAllKeyValuePairs){
    arr.push(obj);
  }
}
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// 2nd version

function whatIsInAName(collection, source){
  const keys = Object.keys(source);

  return collection.filter(obj => {
    let hasAllKeyValuePairs = true;
    for( const key of keys){
      if (obj[key] !== source[key]){
        hasAllKeyValuePairs = false;
        break;
      }
    }
    return hasAllKeyValuePairs; // hasAllKeyValuePairs is Boolean so..
    // if it is true, keep it in the array
    // false, filter it out
   });
}


// 3rd version. using reduce method

function whatIsInAName(collection, source){
  const keys = Object.keys(source);
  return collection.filter(obj => { // inline return
    return keys.reduce((acc, key) => {
      if (obj[key] !== source[key]){
        return false;
      }
      return acc;
    }, true) 
    // true가 기본값이되, obj[key] !== source[key]인 경우만 
    // false를 반환하는 reduce method
    // reduce를 감싸는 filter method.. true 일때만 array에 return
   });
}


// shorten one

function whatIsInAName(collection, source){
  const keys = Object.keys(source);
  return collection.filter(obj => ( 
    keys.reduce((acc, key) => {
      if (obj[key] !== source[key]){
        return false;
      }
      return acc;
    }, true) 
   ));
}
function destroyer(arr) {
  const argsArr = [...arguments].slice(1);

  const filterdArr = [];
  for( let i = 0; i<arr.length ; i++){
    if( !argsArr.includes(arr[i])){
      filterdArr.push(arr[i]);
    }
  }

  return filterdArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// for ... of loop 사용하기

function destroyer(arr) {
  const argsArr = [...arguments].slice(1);

  // another way to shorten above codes.... 
  const filterdArr = [];
  for( let elem of arr ){
    if( !argsArr.includes(elem)){
      filterdArr.push(elem);
    }
  }
  return filterdArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// easiest to read than for-loop

function destroyer(arr) {
  const argsArr = [...arguments].slice(1);
  // const filteredArr = arr.filter( el => !argsArr.includes(el));
  // return filterdArr;
  
  // read this as; if argsArr does not include el,
  // then filter it in (keep it in) filteredArr.

  // include method 읽기
  // 'blue whale'.includes('blue'); // true 반환
  // blue whale includes 'blue'? 그냥 그대로 읽으면됨!

  // simpler, more concise version..
  return arr.filter( el => argsArr.includes(el));

  // much more concise version, but not recommended:
  // return arr.filter( el => ![...arguments].includes(el))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

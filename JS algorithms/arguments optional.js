// function addTogether(){
//   const args = Array.from(arguments);

//   return args.some( n => typeof n !== "number")
//     ? undefined
//     : args.length > 1
//       ? args.reduce( (acc, n) => (acc+=n), 0)
//       : n => (typeof n=== "number" ? n +args[0] : undefined );
// }


// function addTogether(first, second) {
//   if (typeof first !== "number") {
//     return undefined;
//   }
//   const sum = second =>
//     typeof second === "number" ? first + second : undefined;
//   return typeof second === "undefined" ? second => sum(second) : sum(second);
// }


function addTogether(){
  // const args = [...arguments];
  // const args1 = args[0];
  // const args2 = args[1];
  // 위의 shorten one: structuring !!!! nice & concise
  const [arg1, arg2] = [...arguments];

  if (typeof arg1 !== 'number'){
    return undefined;
  }

  // 두번째 parameter가 undefined일 경우
  if ( arg2 === undefined){
    // 함수를 첫번째 파라미터로 돌린 값과 함께
    // 두번째 파라미터로 한번 더 돌림
    return function(num){ 
      if (typeof num !== 'number'){
        return undefined;
      } 
      return arg1 + num;
    };
  }

  if (typeof arg2 !== 'number'){
    return undefined;
  }

  return arg1 + arg2;
}


// refactering
const addTogether = (...args) => {
  console.log("args: ", args);
  //이렇게 spread operator을 parameter로 넣어주면, 작동됨!
  const [arg1, arg2] = args;

  if (typeof arg1 !== 'number'){
    return undefined;
  }

  // arrow function(num) 위를 참조할 것! 똑같은코드임!
  if ( arg2 === undefined){
    return num => 
      typeof num !== 'number' 
        ? undefined
        : arg1 + num;
  }

  if (typeof arg2 !== 'number'){
    return undefined;
  }

  return arg1 + arg2;
}


// version2: not recommended. who can read this? :<
const addTogether = (arg1, arg2) =>
  typeof arg1 !== 'number'
    ? undefined
    : typeof arg2 === undefined
      ? num => typeof num !== 'number'
        ? undefined
        : arg1 + num
      : typeof arg2 !== 'number'
        ? undefined
        : arg1 + arg2



console.log(addTogether(6,8));
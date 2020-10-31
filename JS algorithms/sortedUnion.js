function uniteUnique(arr) {
  const arrOfArr = [...arguments];
  let output = [];
  for (const arr of arrOfArr){
    for (const num of arr){
      if (!output.includes(num)){ // ouput에 num이 없다면 
        output.push(num); // ouput에 추가하기
      }
    }
  }
  return output;
}


// make it 1 for-loop
function uniteUnique(arr) {
  const arrOfArr = [...arguments];
  const elem = arrOfArr.reduce((acc,curr) =>{
    return [...acc, ...curr]
  }, []);

  const output =[];
  for (const num of elem){
    if (!output.includes(num)){ // ouput에 num이 없다면 
      output.push(num); // ouput에 추가하기
    }
  }
  return output;
}
  




// set
function uniteUnique(arr) {
  const arrOfArr = [...arguments];
  const elem = arrOfArr.reduce( (acc,curr) =>{
    return [...acc, ...curr]
  }, []);

  const set = new Set(elem);
  // 이 set자체는 array가 아님 {} 임.
  // array를 만드는 방법은
  // 1.
  // return Array.from(set);
  //2.
  return [...set]; 
  // spread it in an array, then it give us an array!
}



// arrow function 
const uniteUnique = (...args) =>{
  // arrow function안에서는 arguments가 안먹힘.
  // 다른걸 써야함
  // 얼마나많은 parameters를 가질지 모른다면, 
  // spread연산자를 쓰길 추천함
  // ...args
  return [...new Set([...args].reduce((acc,curr)=>{
    return [...acc, ...curr]
  }, []))];
};

// arrow function안에 1문장뿐이므로 {return ...}을 빼도 됨
const uniteUnique = (...args) =>
  [...new Set([...args].reduce((acc,curr)=>{
    return [...acc, ...curr]
  }, []))
];


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

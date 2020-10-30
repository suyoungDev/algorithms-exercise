function binaryAgent(str) {
  return str
    .split(' ')
    .map(el => parseInt(el, 2))
// parseInt 2진수를 10진수로 바꿔줌 (기본값은 10이 아님)
// 나오는 결과는 ascii코드임!
    .map(el => String.fromCharCode(el))
    .join('');  
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

console.log(parseInt(01000001, 2));



function binaryAgent(str) {
  return str
    .split(' ')
    .map(el => String.fromCharCode(parseInt(el, 2)))
    .join('');  
}

const binaryAgent = str => str
  .split(' ')
  .map(el => String.fromCharCode(parseInt(el, 2)))
  .join('');


// for loop
function binaryAgent(str){
  let biString = str.split('');
  let uniString = [];

  for (let i = 0; i <biString.length ; i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join('');
}
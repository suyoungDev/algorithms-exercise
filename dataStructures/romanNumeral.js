const numbers = [1000, 900, 500, 400, 100, 
  90, 50, 40, 10, 9, 5, 4, 1];

const converter = {
  1 : 'I',
  4: 'IV',
  5 : 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

function convertToRoman(num) {
  // using objects lik dictionaries..
  let output = '';
  let i = 0;
  while (num > 0){
    const subtract = numbers[i];
    if (subtract > num){
      i++;
    } else { // subtract < num
      num -= subtract;  // num = num -subtract // num = 46 - 40 / num = 4
      output += converter[subtract]; //output =  converter[40] 반환
    }
  }
  return output;
 }
// 46 입력시 : numbers 어레이에서 i를 늘려서 num보다 작은수일때 즉 40일때 else반환
// num = 46 - 40 == 6이 되고, 
// converter 딕셔너리를 이용해 40의 로만숫자만 output에 넣어짐
// num이 6이 되었으니 다시 while구문 계속
// 6보다 작은 5 찾아서 5 로만숫자 넣고, 다시 num 1이됨. 
// 1의 로만숫자 넣고 while구문 끝.
// output반환.


// 첫번째와 같은 솔루션 but 딕셔너리가 아닌 어레이를 사용하고
// 십진수숫자와 로만숫자의 인덱스를 통일하여 사용.
// 이게 좀 더 쓰기엔 편할지도? 인덱스가 같으니까?
// 단지 유지보수가 좀 별로일지도 모른다?
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};


 function convertToRoman(num) {
  function getNumeral(digit, lowStr, midStr, nextStr) {
    switch (true) {
      case digit <= 3:
        return lowStr.repeat(digit);
      case digit === 4:
        return lowStr + midStr;
      case digit <= 8: // digits 5-8
        return midStr + lowStr.repeat(digit - 5);
      default: // digit 9
        return lowStr + nextStr
    }
  }

  let str = ""

  // Thousands
  str += "M".repeat(Math.floor(num/1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
  num %= 10;

  // Ones
  str += getNumeral(num, 'I', 'V', 'X')

  return str;
}

convertToRoman(36);

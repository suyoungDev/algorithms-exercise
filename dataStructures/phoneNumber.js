// by myself!
function telephoneCheck(str) {
  const regex = /[\W-()\s]/g
// regex로 숫자가아니고 공백, (),-을 다 제외하기.
  let phoneNum = str.replace(regex,'')
  let isNumber = false;

  if (phoneNum.length == 10) {
    isNumber = true;
  } else if (phoneNum.length == 11){
    phoneNum[0] == 1 ? isNumber = true : isNumber = false;
  }

  return isNumber;
}

console.log(telephoneCheck("1 555)555-5555"));
// 이거 false되야하는데 ture반환된다
// ( )소괄호가 하나만있음 false라는데에에에에ㅔ에
// -1 555 555 5555 이것도 false인데 어케해야할지 에휴휴


// regex안쓰느 방법
function telephoneCheck(str){
  let count = 0;
  for (const c of str){
    if (c >= '0' && c <= '9'){
      count++
    }
  }
}


// regex 활용하는 방법
function telephoneCheck(str){
  const regex = /\d/g //digit number in global;
  const phoneNum = str.match(regex);
  
  if (phoneNum.length === 11){
    if (str[0] !== '1'){
      return false;
    }
    str = str.substring(1);
    if (str[0] === ' '){
      str = str.substring(1);
    }
  } else if (phoneNum.length !== 10){
    return false
  } 

  // (000)인지 확인하기 (만 있거나 )이것만 있지않는지 확인
  // regex: /\(\d\d\d\)/g : 3자리 디짓넘버가 ()안에 있는가
  if (str[0] === '('){
    if (!/\(\d\d\d\)/.test(str.substring(0,5))){
      return false;
    }
    str = str.substring(5);
    if (str[0] === ' '){
      str = str.substring(1);
    }
  } else {
    if (!/\d\d\d/.test(str.substring(0,3))) {
      return false;
    }

    str = str.substring(3);
    if (str[0] === '-' || str[0] === ' '){
      str = str.substring(1);
    } 
  }

  if (!/\d\d\d/.test(str.substring(0,3))){
    return false;
  }
  str = str.substring(1);

  if (!str.length){// if the str is not empty
    // (str.length > 0)
    return false
  } 
  return true
}


// much much easier way than above code!
function telephoneCheck(str){
  const usPhoneRegex = /^(1)?( |-)?(\(\d{3}\)|\d{3})( |-)?(\d{3})( |-)?(\d{4})$/gm
  return usPhoneRegex.test(str);
}
// 1로 반드시 시작해야하는 걸 알리는 regex(정규식)

const telephoneCheck =str=> 
/^(1)?( |-)?(\(\d{3}\)|\d{3})( |-)?(\d{3})( |-)?(\d{4})$/gm.test(str);
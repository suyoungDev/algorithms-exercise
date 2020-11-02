// ROT13 암호: A > N, B > O 가 되듯 13을 점프한다
// ROT13 암호로 임력하면 해석된 문자열을 반환하는 함수작성할 것.
// 모든 글자는 대문자, 알파벳이 아닌 문자는 변환하지 말고 전달할 것.

function rot13(str) {
  let rot13 = str.toUpperCase().split('').map( c => 
    /[A-Z]/.test(c) ? c.charCodeAt()-13 : c);

  for (let i = 0; i < rot13.length ; i++){

    if(rot13[i] > 90){
      let val = rot13[i] - 89;
      rot13.slice(i, 1, 65+val);
    }
    if(rot13[i] < 65){
      let val = 65 - rot13[i];
      rot13.splice(i,1, 91-val);
    }
  }

  return rot13.map(c => String.fromCharCode(c)).join('');

}


// solution
const A_code = 'A'.charCodeAt();
// const Z_code = 'Z'.charCodeAt();

function rot13(str){
  let output =''; // output = string

  for (const c of str){
    if (!/[A-Z]/.test(c)){ // 영어대문자가 아니면 
      output += c; // 그냥 output에 추가하기
    } else {
      let code = c.charCodeAt();
      code -= 13;
      if (code < A_code){
        code += 26; // 알파벳갯수가 26개
      // } else if (code > Z_code){
      //   code -= 26;
      }
      output += String.fromCharCode(code);
    }
  }
  console.log(typeof output);
  return output;
}

console.log(rot13("SERR PBQR PNZC"));


// SOLUTION2

function rot13(str) {
  // Split str into a character array
  return (
    str
      .split("")
      // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        var x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}


function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}


function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
// // 1) all lowercase
// // 2) _ and " " (spaces) become hypen(-)
// // 3) capital case always determine the start of a new word,
//     // but not all words start with a capital case.
//     // specifically, the first word in the string 
//     // does not have to be capitalized.
//     // 대문자는 항상 단어의 시작.
//     // 모든 단어의 시작이 대문자는 아님.
//     // 문장의 첫단어의 시작은 대문자가 아니어도됨.

// function spinalCase(str){
//   const words = []; // empty array
//   let word = ''; // empty string

//   // traditional for-loop에 비해 for-of이 더 clean함
//   for (const c of str){ // c는 character의 C. each C를 찾음
//     if (c === '_' || c === ' '){
//       words.push(word);
//       word = '';
//     } else if (c >= 'A' && c <= 'Z' && !word.length){
//       // !word.length 는 word.length = 0; 와 같음..
//       word = c.toLowerCase();
//     } else if (c >= 'A' && c <= 'Z' && word.length){
//       // word.length 는 word.length>0 와 의미가 같음
//       words.push(word);
//       word = c.toLowerCase();
//     } else { 
//       word += c; 
//       //위에서 대문자는 다 걸러지고 남아서 else에 온건
//       // 소문자 뿐이므로 toLowerCase안함
//     }
//   }
//   // if after our for loop, there's still sth in our word variable,
//   // then we just add that to our words array.
//   if (word.length){
//     words.push(word);
//   }

//   // const spinalCase = words.join('-');
//   // return spinalCase;

//   return words.join('-');
// }


// function spinalCase(str){
//   return str
//     .split('')
//     //.map(c => c >= 'A' && c <= 'Z' ? `-${c.toLowerCase()}` : c)
//     .map(c => /[A-Z]/.test(c) ? `-${c.toLowerCase()}` : c)
//     // regex 쓴 버젼
//     // .test(c) : test to see if c fulfills a criteria
//     // 이거 안쓰면 모든문자가(대소문자상관없이) 다 하이픈 붙여짐
//     .join('')
//     .split(/[_ -]+/)
//     // 빈 공간, _, - 모두 하나로묶여서(+) split
//     .filter(word => word.length)
//     // make sure word has length! ' '이걸 걸러내는 것.
//     // white space!
//     // map method로 첫글자가 대문자인 경우에 -대문자가 되었고
//     // 그뒤에 split으로 ' '이 아이템이 되었는데
//     // 이거 안하면 그게 '-' 으로 join됨
//     .join('-')  
//     ;

// }



function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$+$2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}



function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}


function spinalCase(str) {

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("TheAndyGriffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("thisIsSpinalTap"));

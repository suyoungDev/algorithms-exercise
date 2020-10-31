// // done it myself;
// function fearNotLetter(str){
//   const wordsArr = str.split('').map(c => c.charCodeAt());
//   let missingLetter='';

//   for(let i = 0; i < str.length-1 ; i++){
//     if ( (wordsArr[i]+1) !== wordsArr[i+1]){
//       missingLetter = String.fromCharCode(wordsArr[i]+1);
//       break;
//     } 
//   }
//   if( missingLetter == '' ){
//     return undefined;
//   }
//   return missingLetter;
// }

// console.log(fearNotLetter("abce"));


// // 2nd.. 이게 훨씬 깔끔하다 ㅠ_ㅠ;; 어쩔수없지..
// function fearNotLetter(str){
//   let output =undefined; 
//   // 이렇게 미리설정하는게, 비어두고 나중에 언디파인 설정하는것보다 편함

//   for (let i=0; i<str.length-1 ; i++){
//     const currentCode = str.charCodeAt(i);
//     const nexCode = str.charCodeAt(i+1);

//     if (nexCode - currentCode !== 1){
//       output = String.fromCharCode(currentCode + 1);
//       break;
//     }
//   }

//   return output;
// }


// // another way: reduce method
// const fearNotLetter = str =>{
//   return str.split('').reduce( (acc, curr, index, arr) => {
//     if (!arr[i+1]){
//       return acc;
//     }
//     const currentCode = curr.charCodeAt(0);
//     const nexCode = arr[i+1].charCodeAt(0);
//     if (nexCode - c.charCodeAt(0) !== 1){
//       return String.fromCharCode(currentCode +1);
//     }
//     return acc;
//   }, undefined)
// };


// 
function fearNotLetter(str){
  for (let i = 0; i <str.length; i++){
    let code = str.charCodeAt(i);
    
    if (code !== str.charCodeAt(0)+i){
      return String.fromCharCode(code-1);
    }
 }
 return undefined;
}

console.log(fearNotLetter("abce");


function fearNotLetter(str){
  let compare = str.charCodeAt(0), missing;

  str.split('').map( function(letter,index) {
    if (str.charCodeAt(index) == compare){
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

function fearNotLetter(str){
  for (let i = 1; i<str.length ; i++){
    if(str.charCodeAt(i) - str.charCodeAt(i-1) > 1){
      return String.fromCharCode(str.charCodeAt(i-1) + 1);
    }
  }
}


// function pairElement(str) {
//   const output =[];
//   for (const c of str){
//     if (c === 'A'){
//       output.push([c, 'T']);
//     } else if ( c === 'T') {
//       output.push([c, 'A']);
//     } else if ( c === 'G') {
//       output.push([c, 'C']);
//     } else if ( c === 'C') {
//       output.push([c, 'G']);
//     } 
//   }
  
//   return output;
// }


// second version
const pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

// function pairElement(str){
//   const output = [];
//   for (const c of str){
//     output.push([c, pairs[c]]);
//   }
//   return output;
// }




// // arrow function
// const pairElement = (str) => {
//   return str.split('')
//     .map(c => [c, pairs[c]])
// }

// spread operator, not using split method.
const pairElement = (str) =>{
  return [...str].map(c => [c, pairs[c]]);
}


console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
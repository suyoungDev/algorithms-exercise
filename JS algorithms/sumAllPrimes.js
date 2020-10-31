// function sumPrimes(num) {
//   if (num < 2){
//     return 0;
//   }
//   // 2이하는 1인데 1은 소수가 아니므로 0.
//   // 사실 for loop에서 2부터 시작하고,
//   // primeNumbers.reduce의 기본값이 0 이므로 
//   // if절은 없어도 됨.

//   const primeNumbers = [];
  
//   // 위에 2이하를 제외했기때문에 i는 2부터 시작
//   for (let i = 2; i <= num ; i++ ){
//     let isComposite = false;
//     for (const p of primeNumbers){
//       if (i % p === 0){
//         isComposite = true;
//         break;
//       }
//     }

//     if (!isComposite){
//       primeNumbers.push(i);
//     }
//   }

  
//   // let sum=0;
//   // for (let p of primeNumbers){
//   //   sum+=p;
//   // }
  
//   return primeNumbers.reduce((acc,curr) => acc+curr, 0);
// }




// 2nd shorten version:

function sumPrimes(num) {
  const primeNumbers = [];

  for (let i = 2; i <= num ; i++ ){
    let isComposite = false;
    for (const p of primeNumbers){
      if (i % p === 0){
        isComposite = true;
       
      }
    }

    if (!isComposite){
      primeNumbers.push(i);
    }
  }
  console.log(primeNumbers);
  return primeNumbers.reduce((acc,curr) => acc+curr, 0);
}



// function sumPrimes(num) {
//   let nums = Array.from({ length: num + 1 })
//     .map((_, i) => i)
//     .slice(2);
//   for (let n in nums) {
//     nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
//   }
//   return nums.reduce((prevSum, cur) => prevSum + cur);
// }

// function sumPrimes(num) {
//   // step 1
//   let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
//   // step 2
//   let onlyPrimes = arr.filter(n => {
//     let m = n - 1;
//     while (m > 1 && m >= Math.sqrt(n)) {
//       if (n % m === 0) return false;
//       m--;
//     }
//     return true;
//   });
//   // step 3
//   return onlyPrimes.reduce((a, b) => a + b);
//}

console.log(sumPrimes(10));
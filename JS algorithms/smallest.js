function smallestCommons(arr) {
  const small = Math.min(...arr);
  const big = Math.max(...arr);

  // 큰숫자부터 시작하여 내려가는게 더 빠름
  let scm = big;
  // scm = smallest common multiple
  while (true){
    let isScm = true;
    for (let i = small; i <= big; i++){
      if (scm % i !== 0){ 
        // 나눠서 나온 나머지가 0이 아니면
        isScm = false;
        break;
      }
    }

    if (isScm){
      return scm;
    } else {
      scm++;
    }
  }
}

// refactor:
// let small = arr[0]>arr[1] ? arr[1] : arr[0];
// const small = Math.min(arr[0], arr[1]);


// version 2: for-loop

const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};



console.log(smallestCommons([2,10]));

// 전부 곱하면 안됨
// 1 * 2 * 3 * 4 = 24이지만, 12가 공통배수임
// 12/1 ok 12/2 ok 12/3 ok 12/4 ok
// 최소공배수 구하기 == smallest common multiple
// 공약수로 나누어 나온 공통인부분 * 공통이아닌 나머지수
// 1 * 2 * 3 * 2 = 12 




function myReplace(str, before, after) {
  const isCapital = before[0] >= 'A' && before[0] <= 'Z';
  // 대문자면 true 소문자면 false로 불린값이 됨
  let casedAfter;

  if (isCapital){
    casedAfter = after[0].toUpperCase() + after.substring(1);
  } else {
    casedAfter = after[0].toLowerCase() + after.substring(1);
  }


  return str.replace( before , casedAfter);
  // replace할 item이 string일 경우 첫번째만 바꿔준다.
  // string내에 있는 아이템 전부 교체하고싶다면 
  // regex 정규식을 사용해야한다!

  // regex /dog/gi 일경우 gi: global + case insenstive
  // dog, Dog, dOg, doG 까지 잡아줌.
  // i를 안쓰면 Dog...는 안됨 dog만 잡아줌.
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
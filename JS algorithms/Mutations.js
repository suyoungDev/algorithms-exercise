// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// 소문자로 모두 변경하기(비교하기 쉽게)
// 일단 두개의 스트링 모두 문자로 해체하고 배열로 바꾼 뒤,
// loop를 사용하면서
// 두개 배열을 indexOf()를 사용하여 비교하되
// 결과값이 -1이면 false 반환
// 1이상이면 true 반환하면 될 듯?

// solution <1>
function mutation(arr) {
  test = arr[0].toLowerCase();
  target = arr[1].toLowerCase();

  for (let i = 0; i < test.length(); i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(['hello', 'hey']);

// solution <2>
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

// solution <3>
function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();

  return i >= test.length
    ? true
    : !target.includes(test[i])
    ? false
    : mutation([target, test], i + 1);
}

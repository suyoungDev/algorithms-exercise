function palindrome(str) {
  const regex = /\s|\(|\)|_|-|,|\.|\/|\\/g;
  let compare = str.replace(regex,'').toLowerCase().split('');
  let compareArr =[];

  for (let i = compare.length-1; i >= 0 ; i--){
    compareArr.push(compare[i]);
  }
  
 return str.toLowerCase().replace(regex,'') === compareArr.join('') ? true : false;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));



// solution: regex너무 클레버한거 아니냐.. ㅠ 난왜이거 몰랐냐..
// reverse method몰라서 for loop쓴 나 바보같자나..., 바보맞다..
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

// solution 2
// 이건 for-loop썼지만 너무 현명하게 씀... str[i] 와 str[len-i]라니
// i가 0-1-2-3-4 올라갈때 len-i 는 4-3-2-1-0되는거 너무 클레버.. 지니어스..
// 좀 읽기 힘든 방법이긴 하지만 string타입이 아닌경우는 이게 더 좋다..
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}



// solution 3
// 주어진 str이 길수록 더 더 더욱 좋은 해결 방법.
// 왜냐면 책한권을 받았다고 치고, 첫 두 문장에서 틀린것을 알았다면
// 왜 비교를 위해 책 한권 전부를
// .toLowerCase.replace.split.reverse.join 해야하는가?
// 그래서 for-loop보다 while loop이 좋은 방법이다.
// 즉각적일 수 있으므로!
// 두개의 변수는 처음에서 시작하는 index과 뒤에서 시작하는 index 이다.

function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  // 끝과 처음 포인터는 항상 중간에서 만나지 않으므로 back>front
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    // if절의 조건과 맞다면(regex의 단어가 아닌것과 _) front는 계속 증가
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;

    front++;
    back--;
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;
}

// 근데 이거 솔루션2랑 비슷한거아닌가? 미리 lowCase하고 replace하긴했지만.. :<?
// 라고 생각했지만 더 깊게 생각해보니 while밖에는 안될거같기도..


// test method 쓰는 방법: regex.test(str)
str.replace(/[\W_]/g, "") // 알파벳이 아닌건 다 제외하기
// 의 다른 방법
str.filter( (c) => {
  return /[a-zA-Z0-9]/.test(c);
}) // 알파벳인것만 필터걸려서 남기기


function palindrome(str){
  const len = str.length;

  let i = 0;
  let j = str.length - 1;

  while (true) { //meaning this will run forever
    // unless we explicitly tell it to break
    while (!/[a-zA-Z0-9]/.test(str[i])){
      i++;
    }

    while (j>0 && !/a-zA-Z0-9/.test(str[j])){
      j--;
    }

    if (i >= j) {
      return true;
    }

    if (str[i].toLowerCase() !== str[j].toLowerCase){
      return false;
    }
    // if this passed, then we have to increment
    i++;
    j--;
  }
}

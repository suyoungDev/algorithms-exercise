function dropElements(arr, func) {
    var times = arr.length;
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
}
  
  // arr.shift해서 배열의 길이가 점점 짧아질거기때문에
  // 따로 arr.length 배열의길이를 설정해야함.
  // func(arr[0])이 true라면 arr그대로 반환하고 루프 끝(break)
  // 아니라면 앞에서부터 하나씩 shift(아이템빼기)
  // for loop로 아이템 다 돈뒤 arr return.




function dropElements(arr, func) {
    let trueIndex = -1;
  
    for( let i= 0; i<arr.length; i++){
      if(func(arr[i])){
        trueIndex = i;
        break;
      } 
    }
  
    if(trueIndex=== -1){
      return [];
    } else{
      return arr.slice(trueIndex);
    } 
}

function dropElements(arr, func) {
    let trueIndex = arr.findIndex(func);
  
    if(trueIndex=== -1){
      return [];
    } else{
      return arr.slice(trueIndex);
    }
    
}


function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ?
     arr.findIndex(func) : arr.length);
}

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
}

function dropElements(arr, func, i = 0) {
    return i < arr.length && !func(arr[i])
      ? (dropElements(arr.slice(i + 1), func, i))
      : arr;
}
  


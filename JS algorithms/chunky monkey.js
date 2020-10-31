// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// for loop사용하여 num에 이를때까지 push하여 새로운 배열을 생성?

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];

    for( let a = 0; a < arr.length, a++){
        if(a % size !== size -1) temp.push(arr[a]);
        else{
            temp.push(arr[a]);
            result.push(temp);
            temp=[];
        }
    }
    
    if( temp.length !== 0) result.push(temp);
    return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);




function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i += size) {
      arr2.push(arr.slice(i, i + size));
    }
    return arr2;
  }



  function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);



  function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }



  function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
      return [arr];
    } else {
      return [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size), size)
      );
    }
  }
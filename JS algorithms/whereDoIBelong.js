// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// 1: 첫번째 인수의 값크기에 따라 정렬하기 (새로운 어레이 만들기)
// 2: 두번째 인수가, 새로운 어레이에 삽입되려면 몇번째여야할까.(0부터세기)


// 1: 그냥! 첫번재 인수와 두번째 인수의 값크기를 서로 잰다음에
// 몇번째로 큰지 알아보기.


function getIndexToIns(arr, num) {
    let i = 0;
    for ( i = 0; i < arr[i].length ; i++ ){
        if ( arr[i] > num ){ //이것도 말이안됐네..바보,,,

            return i;
        }
    }
    return i;
}

getIndexToIns([40, 60], 50);

// 이러면 첫번째 값에서 return되는게 있어서 안된다..
// 정렬부터 먼저해야겠군!



function getIndexToIns(arr, num) {
    arr.sort(function(a,b){
        return a - b;
    });


    let i = 0;
    for ( i = 0; i < arr.length ; i++ ){
        if ( arr[i] >= num ){
            return i;
        }
    }
    return arr.length; // 왜 이건지 모르겠는데..?
}

getIndexToIns([40, 60], 50);



// 이하는 sort function 예제 //
function compareNumbers(a, b) {
    return a - b;
  }

  function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }


  var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // value 기준으로 정렬
  items.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  


  ///

  function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var times = arr.length; // runs the for loop once for each thing in the array
    var count = 0;
    for (var i = 0; i < times; i++) {
      if (num > arr[i]) {
        count++;
      }
    } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
  }
  
  getIndexToIns([40, 60], 50);
  


  function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    var i = 0;
    while (num > arr[i]) {
      i++;
    }
  
    return i;
  }
  

  function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr.indexOf(num);
  }

  function getIndexToIns(arr, num) {
    // sort and find right index
    var index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
  }
  
  getIndexToIns([40, 60], 500);


  function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  getIndexToIns([1, 3, 4], 2);


  function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }
const flatten = arr => {
    let result = [];

    for (let el of arr){
        if(Array.isArray(el)){
            for(const innerEl of el){
                result.push(innerEl);
            }
        }else{
            result.push(el);
        }
                    
    }
};


function steamrollArray(arr) {
    let flat = [].concat(...arr);
  
    // 재귀함수 이용 너무 섹시하다 ㅠㅠ
    return flat.some(Array.isArray)
    ? steamrollArray(flat)
    : flat;
  }
  


function steamrollArray(arr) {
    let flattenedArray = [];
  
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    const flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (let a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // forEach함수 실행
    arr.forEach(flatten);
    return flattenedArray;
}


function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
      if (Array.isArray(item)) steamrollArray(item, flatArr);
      else flatArr.push(item);
    });
  return flatArr;
}

function steamrollArray(arr, flatArr = []) {
    const elem = arr.pop();
    return elem
      ? !Array.isArray(elem)
        ? steamrollArray(arr, [elem, ...flatArr])
        : steamrollArray(arr.concat(elem), flatArr)
      : flatArr;
  }


steamrollArray([1, [2], [3, [[4]]]]);

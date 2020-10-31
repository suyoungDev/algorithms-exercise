var fibonacci = function(result, len){
    let num1 = result[0],
        num2 = result[1],
        next,
        cnt = 2;

    while ( cnt < len ){
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
        cnt++
    }

    return result;
}


// recursion

function fib2(result, len){
    if( result.length >= len ){
        return result;
    } 
    result.push(result[result.length-2] + result[result.length - 1]);

    return fib2(result, len);
}


// fibonacci odd number

function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let result = 0;
  
    while( curr <= num){
      if( curr % 2 !== 0 ){
        result += curr;
      }
  
      curr = curr + prev;
      
      prev = curr - prev;
  
    }
    return result;
  }
  
  sumFibs(4);
  
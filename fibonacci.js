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
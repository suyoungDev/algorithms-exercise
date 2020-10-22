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

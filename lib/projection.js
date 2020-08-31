const map = (arr, fxn) =>{
    let results = [];
    for(var values of arr){
        results.push(fxn(values));
    }
    return results;
}
const filter = (arr, fxn) =>{
    let results = [];
    for(var values of arr){
        (fxn(values)) ? results.push(values) : undefined;
    }
    return results;
}

const concatAll = (arr, fxn) =>{
    let results = [];
    for( const values of arr){
        results.push.apply(results,values);
    }
    return results;
}
const reduce = (arr,fxn,initialValue)=>{
    let accumulator;
    if(initialValue !== undefined){
        accumulator = initialValue;
    }
    else{
        accumulator =arr[0];
    }
    if(initialValue === undefined){
        for(let i =0; i< arr.length; i++){
            accumulator = fxn(accumulator, arr[i]);
        }
    }
    else{
        for(const values of arr){
            accumulator = fxn(accumulator,values);
        }
    }
    return [accumulator];
}
const arrayUtils = {
    map:map,
    filter:filter,
    concatAll:concatAll,
    reduce:reduce
}

module.exports = {arrayUtils};
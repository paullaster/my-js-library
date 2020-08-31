const forEach = (arr, fxn)=>{
for(let i=0; i<arr.length; i++){
    fxn(arr[i]);
};
}



const forEachObject = (obj,fxn)=>{
 for(var property in obj){
     if(obj.hasOwnProperty(property)){
         //calls the callback and pass to it key 'property' and the value for the key 'obj[property]'
         fxn(property, obj[property]);
     }
 }
}

const unless = (predicate, fxn)=>{
    if(!predicate){
        fxn();
        return;
    }
}
const times = (times,fxn)=>{
 for(let i=0; i<times; i++){
     if(i===0){
         continue;
     }
     else{
        fxn(i);
     }
 }
}

//fn => check array type
const every = (arr, check)=>{
    let result = true;
    for(let i =0; i<arr.length; i++){
       result = result && check(arr[i]);
        return result;
    }
        
    
}

//fn => some array values/elements 
const some = (arr, check)=>{
    let result = false;
    for( const value of arr){
        result = result || check(value);
        return result;
    }

}

//fn => sort
const sortBy = (property)=>{
   return (a,b)=>{
       let result = (a[property]< b[property]) ? -1: (a[property]>b[property]) ? 1 : 0;
       return result;
   }
}

// fn => tap for closure;
const tap = (value) =>
(fn) => (
typeof(fn) === 'function' && fn(value),
console.log(value)
);
const unary = (fxn)=>
    fxn.length === 1 ? fn
    : (arg) => fxn(arg);


const once = (fn) =>
    {
        let done = false;
        return function(){
           return done ? undefined : ((done = true), fn.apply(this, arguments));

        }
    }
const factorial = (n) =>{
    if(n === 0 ){
        return 1;
    }
    // Recursion here;
    return n * factorial(n-1);
}

// caching input and output;
const memoize = (fn) =>{
    let lookUpTable = {};
    return (args) =>(lookUpTable[args] || (lookUpTable[args] = fn(args)),console.log(lookUpTable));
    
}
//factorial with cached 
const fastFactorial = memoize((n) =>{
    if(n === 0){
        return 1;
    }
    else{
        //recursion
        return n * fastFactorial(n-1);
    }
});
//assigning values and emarging objects
const objectAssign = (target, source) =>{
    var to = {};
    for(var i = 0; i< arguments.length; i++){
        var from = arguments[i];
        var keys = Object.keys(from);
        for(var j = 0; j<keys.length; j++){
          to[keys[j]] = from[keys[j]]
        }
    }
    return to;
}

const objectModify = (obj) =>{
    let propertyArray = [];
    for(var key in obj)
        for(var i = 0; i< obj.length; i++)
            propertyArray.push(key, obj[key]);
    return propertyArray;
        
    

}
module.exports = {forEach, forEachObject,unless,times,every,
    some,sortBy,tap,unary,once,factorial,memoize,fastFactorial,
    objectAssign, objectModify};

//04CurryingFun.js

/*
-> Currying is the process of breaking down a function that takes multiple 
arguments into a series of functions that each take a single argument. 
Instead of calling a function with all arguments at once, 
you can call it with one argument at a time, returning a new function for 
each additional argument.
*/

//example
function addTwoNumber(a) {
  return function (b) {
    //FYI: this also called to Anonymous function. which fun not have name.
    return a + b;
  };
}

const add5 = addTwoNumber(5);
const result = add5(2);
console.log("Result is : ", result);

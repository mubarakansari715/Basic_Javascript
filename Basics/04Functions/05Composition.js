//05Composition.js

/*
Function composition is the process of combining multiple functions 
into a single function where the output of one function is the input 
to the next. This helps in creating a pipeline of functions to process 
data in a clear, readable way.
*/

const multiply = (x) => x * 2;
const addNumber = (x) => x + 3;

const compose = (f, g) => (x) => f(g(x));

const result = compose(addNumber, multiply);
console.log("Result :=> ", result(5)); // (5 * 2) + 3 = 13

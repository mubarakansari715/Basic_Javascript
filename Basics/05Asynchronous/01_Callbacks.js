//01_Callbacks.js

//Function Sequence
function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}

// //Sequence
// myFirst()
// mySecond()

//reverse Sequence
mySecond();
myFirst();

/////===========Call back example=============>
function printText(msg) {
  console.log(msg);
}

function addTwoNumber(number1, number2, callback) {
  return callback(number1 + number2);
}

addTwoNumber(5, 3, printText);

//Functions.js

//===> Normal funtions

function myLogs() {
  console.log("My name is Mubarak");
  console.log("My name is Ansari");
  console.log("My name is Happy");
}

//myLogs()

///==> Apply some arithmatic oprations

function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}

//const result = sumTwoNumbers() //Result :  NaN
const result = sumTwoNumbers(2, 5); //Result :  7
//console.log("Result : ", result);

//condition base fun with string interpulation
function isLoginSuccess(username) {
  if (!username) {
    console.log("username empty, please enter");
    return;
  }
  return `${username} login successfully`;
}

//const loginResult = isLoginSuccess(); //empty
const loginResult = isLoginSuccess("Mubarak");
//console.log(loginResult);

////=>>>> Rest Oprator
function calculateCartPrice(...itemsPrice) {
  ///three dots called rest oprator or spread oprator also
  return itemsPrice; // create a all prince into list return
}

//console.log(calculateCartPrice(100, 400, 300));

/////=> Function with object
const userData = {
  username: "Mubarak",
  price: 100,
};

function printUserData(anyObject) {
  return `Username: ${anyObject.username} and price: ${anyObject.price}`;
}

// console.log(printUserData(userData))
// console.log(printUserData({
//     username : "Happy",
//     price : 200
// }))

////====> Function with array
const myArray = [10, 20, 30, 40];

function getArrayValue(getarray) {
  return getarray[2];
}

console.log(getArrayValue(myArray));
console.log(getArrayValue([30, 40, 50]));


/////////////////////////////

//======> Scops

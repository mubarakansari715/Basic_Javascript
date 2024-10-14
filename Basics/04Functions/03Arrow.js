//03Arraow.js

const users = {
  username: "Mubarak",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to my channel`);
  },
};

// console.log(users.welcomeMessage());
// users.username = "happy";
// console.log(users.welcomeMessage());

// function chaiLovers() {
//   console.log(this);
// }
// chaiLovers();

///=======================> Arrow fun ====================
//basic syntex ()=>{}

// const chaiLovers = () => {
//  console.log(this);
// };
// chaiLovers();

//explisite return
// const addTwoNumber = (number1, number2) => {
//   return number1 + number2;
// };

//implicite return
// const addTwoNumber = (number1, number2) => number1 + number2
// const addTwoNumber = (number1, number2) => (number1 + number2)

//return object
const addTwoNumber = (number1, number2) => ({ username: "Mubarak" });

console.log(addTwoNumber(5, 2));

//with array

const myArray = [2, 3, 4, 5];

//syntext
myArray.forEach(() => {});
myArray.forEach(function () {});

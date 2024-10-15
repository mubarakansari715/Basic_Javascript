//02_Asynchronous.js
/*
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/

//console.log("asynchronous");

//basic of asynchronous
// console.log("Step start");

// setTimeout(() => {
//   console.log("Called set time out");
// }, 2000);

// console.log("Step end");

/*
output:
Step start
Step end
Called set time out */

// setTimeout(showMyPrint, 2000);
// function showMyPrint() {
//   console.log("Called setTimeout");
// } //Called setTimeout

///////////////////===>set interval///////////////
// console.log("Step start")

// setInterval(() => {
//   console.log("Called set time out");
// }, 2000);

// console.log("Step end");

setInterval(showMyPrint, 2000);
function showMyPrint() {
  console.log("Called set time interval by called fun");
}

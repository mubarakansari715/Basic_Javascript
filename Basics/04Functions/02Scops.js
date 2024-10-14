//02Scops.js

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

///==> put in conditions
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // avoid to used var, if it is no need
}
// console.log(a);
// console.log(b);
//console.log(c);

//====> Globe scope and block scope
let aNumber = 300;
if (true) {
  let aNumber = 20;
  //console.log("Inner", aNumber);
}
//console.log("Globe", aNumber);

//===> Nested Scops
function parent() {
  const username = "Mubarak";

  function child() {
    let email = "mubarak@gmail.com";
    console.log("Username is : ", username);
  }

  //console.log(email); //Error => ReferenceError: email is not defined

  child(); // called child fun
}

parent(); //called parent fun

//==> same as consditions
if (true) {
  const username = "mubarakansari";
  if (true) {
    const email = "mmm@gmail.com";
    console.log("conditions", username);
  }

  //console.log(email); //Error => ReferenceError: email is not defined
}

///=====> Decleration of Funs
function incressOne(number) {
  return number + 1;
}

console.log(incressOne(5)); //normal fun

const incressTwo = function (number) {
  return number + 2;
};

console.log(incressTwo(10)); //create a fun as variable
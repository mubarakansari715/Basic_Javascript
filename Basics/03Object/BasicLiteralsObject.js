//BasicLiteralsObject.js

const myUserObject = {
  name: "mubarak",
  email: "mubarak@gmail.com",
  "full name": "mubarak ansari",
};

//get data from object
// console.log(myUserObject.email);
// console.log(myUserObject["email"]);
// console.log(myUserObject["full name"]);


///use symble
const mySymbolkey = Symbol("key1");
const mySymbol = {
  [mySymbolkey]: "mubarka",
};

// console.log(mySymbol[mySymbolkey]);
// console.log(mySymbol);


///Freeze oprations
myUserObject.email = "mubarak@yahoo.com";
//console.log(myUserObject);
//Object.freeze(myUserObject); // freeze the object, here email is not changed again till unfreeze
myUserObject.email = "mubarak@new.com";
//console.log(myUserObject);


//function object
myUserObject.intro = function () {
  console.log("called function object");
};

myUserObject.intro1 = function () {
    console.log(`called function object :: username => ${this.name}`);
  };

console.log(myUserObject.intro());
console.log(myUserObject.intro1());

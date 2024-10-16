//01_Basics.js
console.log("Welcome Mubarak");

//practive for shallow copy

const data = {
  username: "Muabrak",
  userInfo: {
    username: "abc",
    age: 25,
  },
};

console.log("----------------------------------------");
const shallowCopy = { ...data };
shallowCopy.userInfo.username = "Happyji";

console.log("Origenal object", data);
console.log("shallowObject object", shallowCopy);

console.log("----------------------------------------");
console.log("---------------DeepCopy-------------------------");

const deepCopy = JSON.parse(JSON.stringify(data));
deepCopy.userInfo.username = "Mubu ansari";

console.log("Origenal object", data);
console.log("shallowObject object", deepCopy);
console.log("----------------------------------------");

console.log("----------------------------------------");
console.log(
  "----------------Fun scope and closures and laxical------------------------"
);

//scope closer and laxical
let username = "ansaro";
function parentFun() {
  let username = "Mubarak";
  function childFun(age) {
    let username = "Happyji";
    console.log(username, age);
  }
  return childFun(15);
}

parentFun();

console.log("----------------------------------------");
console.log("---------------used the this keyword-------------------------");

const person = {
  myUsername: "Mubarak",
  userInfo: function () {
    console.log(this.myUsername);
  },
};

console.log(person.userInfo());


//aarow fun this
const obj = {
  name: 'Alice',
  arrowFunc: () => console.log(this.name), // Uses `this` from the surrounding scope
  regularFunc() {
    console.log(this.name); // Uses `this` from the object calling the function
  }
};

obj.arrowFunc(); // Undefined, because `this` is from the global scope
obj.regularFunc(); // "Alice", because `this` refers to `obj


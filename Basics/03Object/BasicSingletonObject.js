//BasicSingletonObject.js

const tinderUser = new Object();
//const tinderUser = {} //same above
tinderUser.name = "mubarak";
tinderUser.email = "mubarak@gmail.com";
tinderUser.age = 25;

//console.log(tinderUser);

//nested objects

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstName: "Mubarak",
      lastName: "Ansari",
    },
  },
};

//console.log(regularUser.fullname.userFullname.firstName);

//combine or merge object
const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "c", 4: "d" };

const object3 = Object.assign({}, object1, object2); // old way
console.log(object3);

const object4 = { ...object1, ...object2 }; //best way using the spread oprator
console.log(object4);

//find key and value of the objects
console.log(Object.keys(object3));
console.log(Object.values(object3));

//destructuring object
const MyCourse = {
  courseName: "Basic of Js",
  price: 999,
  guiderName: "Muabrak",
};

const { guiderName : guider } = MyCourse; // this is destructuring guiderName into guide
console.log(guider);

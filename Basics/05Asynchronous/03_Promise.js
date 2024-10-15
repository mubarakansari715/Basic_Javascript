//03_Promise.js

//Create a basic syntext

//first way
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("called setTimeout");
  }, 2000);
});

promiseOne.then(function () {
  console.log("called then");
});

//second way to create a promise
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Seccond timerout");
  }, 2000);
}).then(() => {
  console.log("Seccond then called");
});

//==> used resolve keyword
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Seccond timerout");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Seccond then called");
});

//==> Pass value to resolve
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Seccond timerout");
    resolve({ username: "mubarak" });
  }, 2000);
}).then((user) => {
  console.log("Seccond then called", user);
});

//==> Pass value to resolve, and find perticuler object key
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "mubarak", email: "mubarak@gmail.com" });
  }, 2000);
})
  .then((user) => {
    console.log("Seccond then called", user);
    return user.email;
  })
  .then(function (email) {
    console.log("User email is :", email);
  });

//==> Pass value to reject, and handle error
new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "mubarak", email: "mubarak@gmail.com" });
    } else {
      reject({ errorMsg: "Something went wrong!" });
    }
  }, 2000);
})
  .then((user) => {
    console.log("Seccond then called", user);
    return user.email;
  })
  .then(function (email) {
    console.log("User email is :", email);
  })
  .catch(function (msg) {
    console.log("ERROR ==> ", msg.errorMsg);
  });

//////====> promiseAsync => Async
///second way to do promise
const promiseAsync = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "mubarak", email: "mubarak@gmail.com" });
    } else {
      reject({ errorMsg: "Something went wrong!" });
    }
  }, 2000);
});

async function consumeAsyncTask(params) {
  try {
    const response = await promiseAsync;
    console.log(response);
  } catch (error) {
    console.log(error.errorMsg);
  }
}

consumeAsyncTask();

////==========> Called api================>>>>>>
/*
-> Due to the high priority of the queue, it will always fetch data first.

*/

//==> 1 using the async
async function getAllUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUserData();

//==> 2 using the fetch and then
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
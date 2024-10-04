//Java script Array Practice

const MyArray1 = [1, 2, 3, 4, 5];
const MyArray2 = [6, 7, 8, 9];

//check array
// console.log(MyArray1);

//shallow copy and deep copy

/*
shallow copy : which having the share same refrence of the copy array object. If you do some changes in copy object that will also 
effecting to your origanal array.
*/

/*
deep copy : which having the not share same refrence of the copy array object. If you do some changes in copy object that will not 
effecting to your origanal array.
*/

//=>Methods of Array

//push
MyArray1.push(12);
//console.log(MyArray1);

//pop / shift => remove last element
MyArray1.pop();
//console.log(MyArray1);

//unshift -> add element in zero index
MyArray1.unshift(15);
//console.log(MyArray1);

//shift
MyArray1.shift();
//console.log(MyArray1);

//includes => checked element exist in array or not
//console.log(MyArray1.includes(5))
//console.log(MyArray1.indexOf(50))

//join => make array into string
//const newArray = MyArray1.join()
//console.log(newArray);

//slice => is not manipulation of origneal array
const mySlice = MyArray1.slice(1, 3);
// console.log(mySlice);
// console.log(MyArray1);

//splice => is manipulation of origneal array, range will remove from the array
const mySplice = MyArray1.splice(1, 3);
// console.log(mySplice);
// console.log(MyArray1);

//Join Array Practice

const number1 = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9, 0];

//number1.push(number2) //[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 0 ] ]
const resultconcat = number1.concat(number2); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//console.log(resultconcat)

//spread array
const resultSpread = [...number1, ...number2];
//console.log(resultSpread);

//created own array
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));

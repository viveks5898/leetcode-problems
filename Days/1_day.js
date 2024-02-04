Taskone: "write a function createHelloWorld. it should return a new function that always return HelloWOrld!";

const createHelloWorld = function () {
  return function () {
    return "hello world";
  };
};
const a = createHelloWorld();
a(); // HelloWorld!

// In Javascript there are two main ways to declare function

//Basic-Syntax:
function f(a, b) {
  const sum = a + b;
  return sum;
}
// f(4,7) = 11

//Annonymous:Function

var ann = function (a, b) {
  const sum = a + b;
  return sum;
};
// console.log(ann(4,5))

//  IIFE
var ann = (function (a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
// console.log(ann)
Closure: "Clousre means the inner function always has access to varibale and parameter of its outer funciton",
  "closure simillar to lexiacal scopping";
// closure

function addSomething(a) {
  let b = 3;
  function increment() {
    return a + b;
  }
  return {
    increment: increment,
  };
}
// Renaming the variable for clarity and invoking the 'increment' function
const adder = addSomething(4);
console.log("addSomething,", adder.increment());
function createCounter() {
  let value = 0;
  function increment() {
    return ++value;
  }
  return {
    increment: increment,
  };
}
const value = createCounter();

console.log(value.increment());
console.log(value.increment());
console.log(value.increment());

Note: "A callback function is a fuciton that is paased into another function as an arguments.";
// Function that takes two numbers and a callback function as arguments
function calculate(num1, num2, callback) {
  console.log("Calculating...");
  const result = callback(num1, num2); // Invoking the callback function with num1 and num2 as arguments
  console.log("Result:", result);
}

// Callback function to add two numbers
function add(a, b) {
  return a + b;
}

// Callback function to multiply two numbers
function multiply(x, y) {
  return x * y;
}

// Using the calculate function with different callback functions
calculate(5, 3, add); // Output: "Calculating...", "Result: 8"
calculate(5, 3, multiply); // Output: "Calculating...", "Result: 15"

Note: "A function that accept function or return a fucntion is called a higher order function.";
// Higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
  console.log("Executing the higher-order function");
  callback(); // Invoking the callback function passed as an argument
}

// Callback function
function callbackFunction() {
  console.log("Executing the callback function");
}

// Calling the higher-order function and passing the callback function as an argument
higherOrderFunction(callbackFunction);

Note: "Annonymous function do not support hositing. arrow function is example of annonymous function.";

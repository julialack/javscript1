//varibales

const fruit = "Apple";
fruit = "Orange";

console.log("The fruit is", fruit);

// Task 1: Inside of a console.log(), add 3.5 to your age:
console.log(3.5 + 28);

// Task 2: Inside of a console.log(), take the current year and subtract 1969:

console.log(2023 - 1969);

// Task 3: Inside of a  console.log(), divide 65 by 240:
console.log(65 / 240);

// Task 1: Use console.log to print your name in uppercase

console.log("Julia".toUpperCase());

// Task 2: Find a function from the JavaScript string documentation (link below)
// to remove the whitespace around the string in the console.log() below.

console.log("    Remove whitespace   ");
var myString = "    Remove whitespace   ";
console.log(myString.trim());

// Task 3: Find a function in the documentation to count the number of characters in a
//         string and update the console.log() below to print the number instead of the string:
console.log("How many characters long is this string?");
var myString = "How many characters long is this string?";
console.log(myString.length);

// Task: Below is a variable which stores the speed a car is travelling. Write an if statement
// below the varaible which prints "Slow down!" if the car is travelling above 100, or
// prints "Carry on" if it's travelling below 100.

const carSpeed = 85;

if (carSpeed > 100) {
  console.log("Slow down!");
} else {
  console.log("Carry on");
}

// Task 1: Below is a variable which stores the word count of a blog post I'm writing.
// Write an if-statement which logs (console.log) "Get writing!" if the number is 0.
const wordCount = 0;

if (wordCount === 0) {
  console.log("Get writing!");
}

// Task 2: Use the "and" logical operator (&&) to chain two assertions together. Below are two
//         variables; one which stores the current temperature, and one which stores whether
//         someone has gone for a run today. Write an if-statement which prints "Go for a run!"
//         if the current temperature is greater than 10, and the goneForARun is false.

const currentTemperature = 15;
const goneForARun = false;

if (currentTemperature > 10 && !goneForARun) {
  console.log("Go for a run!");
}

// Task 3: Using .length() to get the length of a string and the `name` variable below,
//         write an "else if" statement which prints the following:
//         * "You have a long name!" if the length of the name is greater than 10 characters long
//         * "You have a short name!" if the length of the name is less than 5 characters long
//         * "You have a medium length name!" if neither of the other two assertions is true

const name = "Mary";

if (myName.length > 10) {
  console.log("You have a long name!");
} else if (myName.length < 5) {
  console.log("You have a short name!");
} else {
  console.log("You have a medium length name!");
}

// Functions are a way to store a re-usable snippet of code in a block which can
// be run later. For example, this function would print the current time when invoked:
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};

// Task 1: Invoke the printCurrentTime function inside a console.log():
console.log(printCurrentTime());

// Task 2: Write a function to print your name and invoke it twice
const printMyName = () => {
  console.log("Julia");
};

printMyName();
printMyName();

// Task 3: Write a function called `printGreeting`. When invoked using the examples
// below, it should print "Hello Bob" or "Hello Sue":
//
// printGreeting("Bob") // This should print "Hello Bob"
// printGreeting("Sue") // This should print "Hello Sue"

function printGreeting(name) {
  console.log(`Hello ${name}`);
}

// Test
printGreeting("Bob");
printGreeting("Sue");

// Task 4: Write a function called `multiply` which multiplies two numbers together and returns the value
// so that it can be stored in a variable. See the example below to see how it should work.
//
// const first = multiply(2, 2)
// console.log(first) // this should print "4"
//
// const second = multiply(100, 4)
// console.log(second) // this should print "400"

const multiply = (a, b) => {
  return a * b;
};

const first = multiply(2, 2);
console.log(first);

const second = multiply(100, 4);
console.log(second);

const warmEnough = (temperature) => {
  return temperature > 10;
};

if (warmEnough(15)) {
  console.log("Go for a run!");
}

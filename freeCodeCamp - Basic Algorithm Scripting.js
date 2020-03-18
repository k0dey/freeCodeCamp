// Basic Algorithm Structures [freeCodeCamp]

// #1 Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

// #2 Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// #3 Factorialize a Number
//   Return the factorial of the provided integer.
//   If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//   Factorials are often represented with the shorthand notation n!
//   For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//   Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  return Array.from({ length: num || 1 }, (v, i) => i + 1).reduce(
    (total, current) => total * current
  );
}

// #4 Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
}

// #5 Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  return arr.map(nums => nums.sort((a, b) => b - a)[0]);
}

// #6 Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

// #7 Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  return num >= 0 ? Array(num + 1).join(str) : "";
}

// #8 Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  return num < str.length ? `${str.slice(0, num)}...` : str;
}

// // #9 Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
  return arr.find(element => func(element) === true);
}

// // #10 Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === "boolean";
}

//   // #11 Title Case a Sentence
//   Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//   For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// #12 Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

// // #13 Falsy Bouncer
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  return arr.filter(Boolean);
  // alternatively;
  // return arr.filter(element => element);
}

// #14 Where do I belong?
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  return arr.filter(nums => nums < num).length;
}

// #15 Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(letter =>
      arr[0]
        .toLowerCase()
        .split("")
        .includes(letter)
    );
}

// #16 Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// flatten.js

// Function to compare arrays and log the result
function assertArraysEqual(actual, expected) {
    const isEqual = eqArrays(actual, expected);
    const message = isEqual ? 'Pass' : `Fail: Expected ${expected}, but got ${actual}`;
    console.log(message);
  }
  
  // Function to check if two arrays are equal
  function eqArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  assertArraysEqual(arr1, arr2);
  
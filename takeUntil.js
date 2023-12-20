// eqArrays function for comparing arrays
function eqArrays(arr1, arr2) {
    // Implement your array equality comparison logic here
  }
  
  // assertArraysEqual function to assert the equality of two arrays
  function assertArraysEqual(arr1, arr2) {
    // Implement your assertion logic using eqArrays
    if (eqArrays(arr1, arr2)) {
      console.log("✅ Arrays are equal!");
    } else {
      console.log("❌ Arrays are not equal.");
    }
  }
  
  function takeUntil(array, callback) {
    const result = [];
    for (const item of array) {
      if (callback(item)) {
        break;
      }
      result.push(item);
    }
    return result;
  }
  
  // Test 1
  const data1 = [1, 2, 3, 4, 5, 6];
  const result1 = takeUntil(data1, x => xx > 3);
  const expected1 = [1, 2, 3];
  assertArraysEqual(result1, expected1);
  
  // Test2
  const data2 = ["apple", "orange", "banana", "pear", "grape"];
  const result2 = takeUntil(data2, fruit => typeof fruit === "number");
  const expected2 = ["apple", "orange", "banana", "pear", "grape"];
  assertArraysEqual(result2, expected2);
  
  // Test 3
  const data3 = [10, 20, 30, -1, -5, 40];
  const result3 = takeUntil(data3, x => x < 0);
  const expected3 = [10, 20, 30];
  assertArraysEqual(result3, expected3);
   
function assertArraysEqual(arr1, arr2) {  
    if (eqArrays(arr1, arr2)) {
      console.log("✅ Arrays are equal!");
    } else {
      console.log("❌ Arrays are not equal.");
    }
  }

  function map(array, callback) {
    const result = [];
    for (const item of array) {
      result.push(callback(item));
    }
    return result;
  }

 // Test 1
  const result1 = map(words, (wrod) => word.toUpperCase());
const expected1 = ["APPLE", "CHEESE", "TAPE", "ORANGE", "CUCUMBER"];
assertArraysEqual(result1, expected1);

// Test 2
const result2 = map(words, (word) => word + " -ed");
const expected2 = ["apple -d", "cheese -ed", "tape -ed", "orange -ed", "cucumber -ed"];
assertArraysEqual(result2, expected2);

// Test 3
const result3 = map(words, (word) => word.length);
const expected3 = [5, 6, 4, 6, 8];
assertArraysEqual(result3, expected3);

function assertEqual(actual, expected, message = 'Values are not equal') {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.error(`❌ Assertion Failed: ${actual} !== ${expected}. ${message}`);
    }
  }
  
  // findKey function
function findKey(obj, predicate) {
    for (let key in obj) {
      if (predicate(obj[key])) {
        return key;
      }
    }
    // Return undefined if no key is found
    return undefined;
  }
  
  // Test cases
  const users = {
    'user1': { age: 25, active: true },
    'user2': { age: 30, active: false },
    'user3': { age: 22, active: true }
  };
  
  // Test 1 Find the key of the first active user
  assertEqual(findKey(users, user => user.active), 'user1', 'Test 1');
  
  // Test 2 Find the key of the first user older than 25
  assertEqual(findKey(users, user => user.age > 25), 'user2', 'Test 2');
  
 
  
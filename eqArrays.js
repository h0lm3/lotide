const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length); {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    

  
   
    return true;
  };
  
  // Example usage:
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  console.log(eqArrays(array1, array2)); // Output: true
  
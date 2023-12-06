function flatten(arr) {
    let flattenedArray = [];
  
    for (let element of arr) {
      if (Array.isArray(element)) {
        flattenedArray = flattenedArray.concat(flatten(element));
      } else {
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
  }
 
  console.log(result);
  


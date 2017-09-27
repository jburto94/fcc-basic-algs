function largestOfFour(arr) {
  let largestInArray = 0;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestInArray) {
        largestInArray = arr[i][j];
      }
    }
    newArray.push(largestInArray);
    largestInArray = 0;
  }
  return newArray;
}
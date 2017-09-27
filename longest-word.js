function findLongestWord(str) {
  let array = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  return maxLength;
}
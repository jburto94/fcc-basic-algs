function getIndexToIns(arr, num) {
  var allNums = arr.concat(num);
  allNums.sort(function(a, b) {
    return a - b;
  });
  return allNums.indexOf(num);
}
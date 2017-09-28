function bouncer(arr) {
  let filteredArray = arr.filter(function(value) {
    if (value != false) {
      return value;
    }
  });
  return filteredArray;
}
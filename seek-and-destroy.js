function destroyer(arr) {
  let args = Array.from(arguments);
  args.splice(0, 1);
  let newArray = arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
  return newArray;
}
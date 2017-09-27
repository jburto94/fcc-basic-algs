function titleCase(str) {
  let array = str.split(' ');
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let singleStr = array[i];
    newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase());
  }
  str = newArray.join(' ');
  return str;
}
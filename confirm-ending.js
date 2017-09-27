//Method using splice() 
function confirmEnding(str, target) {
if (str.slice(str.length - target.length) == target) {
    return true;
  }
  return false;
}

//Method using substr() 
function confirmEnding(str, target) {
  if (str.substr(-(target.length), target.length) == target) {
    return true;
  }
  return false;
}

//Method using substring() 
function confirmEnding(str, target) {
  if (str.substring(str.length - target.length, str.length) == target) {
    return true;
  }
  return false;
}
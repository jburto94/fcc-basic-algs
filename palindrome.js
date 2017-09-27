function palindrome(str) {
  let newStr = str.replace(/[^a-z0-9]/gi, '');
  for (let i = 0; i <= Math.floor(newStr.length / 2); i++) {
    if (newStr[i].toLowerCase() != (newStr[newStr.length - 1 - i].toLowerCase())) {
      return false;
    }
  }
  return true;
}
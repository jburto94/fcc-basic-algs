function truncateString(str, num) {
  let trunStr = '';
  if (str.length > num && num > 3) {
    trunStr = str.slice(0, num - 3) + '...';
    return trunStr;
  } else if (str.length > num) {
    trunStr = str.slice(0, num) + '...';
    return trunStr;
  } else {
    return str;
  }
}
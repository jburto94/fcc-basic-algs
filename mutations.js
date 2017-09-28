function mutation(arr) {
  let lowerStr1 = arr[0].toLowerCase();
  let lowerStr2 = arr[1].toLowerCase();
  for (let i = 0; i < lowerStr2.length; i++) {
    if (lowerStr1.indexOf(lowerStr2[i]) == -1) {
      return false;
    } 
  }
  return true;
}
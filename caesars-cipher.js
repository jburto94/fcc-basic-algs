function rot13(str) {
  let valueStr = [];
  let newStr = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      valueStr.push((newStr.charCodeAt(i) - 52) % 26 + 65); 
    } else {
      valueStr.push(newStr.charCodeAt(i));
    }
  }
  return String.fromCharCode(...valueStr);
}
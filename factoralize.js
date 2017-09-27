function factorialize(num) {
  let total = 1;
  for (let n = 1; n <= num; n++) {
    total *= n;
  }
  return total;
}
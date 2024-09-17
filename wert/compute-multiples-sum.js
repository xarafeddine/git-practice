function computeMultiplesSum(num) {
  if (num < 3) {
    return 0;
  }
  let i = 3;
  let sum = 0;
  while (i <= num) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
      console.log(i);
    }
    i++;
  }
  return sum;
}

console.log(computeMultiplesSum(30));

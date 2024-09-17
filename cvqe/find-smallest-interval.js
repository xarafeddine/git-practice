function findSmallestInterval(numbers) {
  let diff = Math.abs(numbers[0] - numbers[1]);
  if (numbers.length === 2) {
    return diff;
  }

  numbers = numbers.sort();

  for (let i = 2; i < numbers.length - 1; i++) {
    let newDiff = Math.abs(numbers[i] - numbers[i + 1]);
    if (newDiff < diff) {
      diff = newDiff;
    }
  }
  return diff;
}
console.log(findSmallestInterval([10, 3, 5, 5, 67, 87, 4, 8, 19]));

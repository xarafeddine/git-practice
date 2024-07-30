function getMaximumMEX(arr) {
  // Write your code here
  let sorted = arr.sort();
  sorted[0] = 0;
  let i = 1;
  while (i < sorted.length) {
    if (sorted[i] > sorted[i - 1] + 1) sorted[i] = sorted[i - 1] + 1;
    i++;
    console.log(sorted);
  }
  return sorted[i - 1] + 1;
}
console.log(getMaximumMEX([0, 0, 2, 3]));

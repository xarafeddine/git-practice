function calcSum(arr, n1, n2) {
  if (arr.length === 0) {
    return 0;
  }
  if (n1 > n2) return 0;

  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log(calcSum([1, 1, 3, 2, 4, 2, 5, 2, 2, 4], 0, 1));

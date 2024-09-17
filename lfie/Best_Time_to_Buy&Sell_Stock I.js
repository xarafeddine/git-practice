function maxProfit(array) {
  // Your code will replace this placeholder return statement.
  let i = 0;
  let j = 1;
  let max = 0;
  while (j < array.length) {
    let diff = array[j] - array[i];
    if (diff < 0) {
      i = j;
    } else {
      if (max < diff) max = diff;
    }

    j++;
  }
  return max;
}
console.log("result:::", maxProfit([1, 7, 2, 3, 6, 7, 6, 7]));

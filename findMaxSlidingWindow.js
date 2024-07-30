function findMaxSlidingWindow(nums, w) {
  // your code will replace this placeholder return statement
  let arr = [];
  for (let i = 0; i < nums.length + 1 - w; i++) {
    let max = -Number.MAX_VALUE;
    for (let j = i; j < w + i; j++) {
    //   console.log(max, nums[j]);
      if (max < nums[j]) max = nums[j];
    }

    arr.push(max);
  }
  return arr;
}

let result = findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log(result);

const moveZeroes = (nums) => {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arr.push(i);
    } else {
      if (arr.length) {
        nums[arr[0]] = nums[i];
        nums[i] = 0;
        arr.shift();
        arr.push(i);
      }
    }
    console.log(arr, nums);
  }
};

moveZeroes([0, 9, 5, 0, 1, 6, 0, 6, 9, 0, 8]);

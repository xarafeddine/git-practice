// var rotate = function (nums, k) {
//   let left = nums.slice(0, nums.length - k);
//   let right = nums.slice(nums.length - k);
//   nums = right.concat(left);

//   console.log(nums);
// };

var rotate = function (nums, k) {
  let arr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = arr[i];
  }
  console.log(nums);
};

var rotate = function (nums, k) {
  function reverse(l, r) {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  
  console.log(nums);

};
rotate([1, 2, 3, 4, 5, 6, 7], 3);

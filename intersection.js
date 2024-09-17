const intersection = (nums1, nums2) => {
  const hashMap = {};
  const arr = [];

  for (let i = 0; i < nums1.length; i++) {
    hashMap[nums1[i]] = hashMap[nums1[i]] + 1 || 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hashMap[nums2[i]] > 0) {
      hashMap[nums2[i]] -= 1;
      arr.push(nums2[i]);
    }
  }

  console.log(hashMap);

  return arr;
};

console.log(intersection([2, 2, 2, 2, 4, 6], [2, 2, 6]));

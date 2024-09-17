function findLongestSubstring(inputString) {
  // Your code will replace this placeholder return statement.
  let max = 0;

  let obj = {};
  let i = 0;
  while (i < inputString.length) {
    if (obj[inputString[i]] !== undefined) {
      console.log(obj);
      i = obj[inputString[i]] + 1;
      if (max < Object.keys(obj).length) max = Object.keys(obj).length;
      obj = {};
    } else {
      obj[inputString[i]] = i;
      i++;
    }
  }
  if (max < Object.keys(obj).length) max = Object.keys(obj).length;
  return max;
}
console.log(findLongestSubstring("abcdbea"));

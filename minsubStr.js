function minWindow(s, t) {
  // Your code will replace this placeholder return statement.

  let minSubStr;
  for (let k = 0; k < s.length - t.length; k++) {
    let num = 0;
    let subArr = [];
    for (let i = k; i < s.length && num < t.length; i++) {
      for (let j = 0; j < t.length; j++) {
        if (s[i] == t[j]) {
          num++;
        }
      }
      subArr.push(s[i]);
    }

    if (!minSubStr || (minSubStr.length > subArr.length && num === t.length)) {
      minSubStr = subArr.join("");
    }
    console.log(minSubStr);
  }
  return minSubStr;
}

// console.log(minWindow("QWER", "WE"));
console.log(minWindow("ABXYZJKLSNFC", "ABC"));

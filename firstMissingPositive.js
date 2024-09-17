var firstMissingPositive = function (nums) {
    let num = 1;
    let s = new Set();
    let i = 0;
    while (i < nums.length) {
        // console.log(num, s)
        if (num < nums[i]) s.add(nums[i]);
        else if (num === nums[i]) num++;
        i++;
    }
    while (s.size !== 0) {
        // console.log(num, s)
        if (!s.delete(num)) {
            return num;
        }
        num++;
    }
    return num;
};
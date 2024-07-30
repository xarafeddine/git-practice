var reverse = function (x) {
  let arr = x.toString().split("");
  let sign = "";
  if (x < 0) {
    arr = arr.splice(1);
    sign = "-";
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j--;
    i++;
  }

  let num = +(sign + arr.join(""));
  if (-(2 ** 31) > num || num > 2 ** 31 + 1) return 0;
  return num;
};
console.log(reverse("-435"));

//doesn't work for super large numbers
// const plusOne = (digits) => {
//   let str = "";
//   for (let digit of digits) {
//     str += digit;
//   }
//   let arr = [...("" + (1 + +str))];
//   return arr;
// };

const plusOne = (digits) => {
  let i = digits.length - 1;

  while (i >= 0) {
    digits[i]++;
    if (digits[i] !== 10) break;
    digits[i] = 0;
    i--;
  }
  if (i === -1) {
    digits.unshift(1);
  }
  return digits;
};
console.log(plusOne([4, 5, 6]));

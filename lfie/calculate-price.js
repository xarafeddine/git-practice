function calcPrice(prices, discount) {
  if (prices.length === 1) {
    return prices[0] * (1 - discount / 100);
  }

  let max = 0;
  let sum = 0;
  for (let price of prices) {
    if (price > max) {
      max = price;
    }
    sum += price;
  }

  return Math.floor(sum - max + max * (1 - discount / 100));
}

console.log(calcPrice([1, 3, 5, 10], 50));

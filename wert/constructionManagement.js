function minCost(houses) {
  
  let minColumn = houses[0];
  for (let i = 1; i < houses.length; i++) {
    for (let j = 0; j < 3; j++) {
      minColumn[j] = Math.min(minColumn[j], houses[i][j]);
    }
  }
}

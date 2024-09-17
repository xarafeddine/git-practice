function getMinimumHealth(initial_players, new_players, rank) {
  // Write your code here
  let arr = initial_players.sort();
  let health = arr[arr.length - rank];
  let add = arr[arr.length - rank];
  for (let i = 0; i < new_players.length; i++) {
    if (arr[arr.length - rank] < new_players[i]) {
      if (rank === 1 || new_players[i] < arr[arr.length - rank + 1])
        add = new_players[i];
      else add = arr[arr.length - rank + 1];
    }
    console.log(add);
    health += add;
  }

  return health;
}

function getMinimumHealth2(initial_players, new_players, rank) {
  // Write your code here
  let arr = initial_players.sort();
  let health = arr[arr.length - rank];
  for (let i = 0; i < new_players.length; i++) {
    arr.push(new_players[i]);
    arr.sort();
    health += arr[arr.length - rank];
    console.log(arr);
  }

  return health;
}

console.log(getMinimumHealth([3, 5, 2], [4, 2], 3));
console.log("-".repeat(20));
console.log(getMinimumHealth2([3, 5, 2], [4, 2], 3));

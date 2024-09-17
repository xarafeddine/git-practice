function minTime(prossTime, taskTime) {
  let sorted = taskTime.sort().reverse();
  console.log(sorted);
  let arr = [];
  let start = 0;

  for (let i = 0; i < prossTime.length; i++) {
    // console.log(Math.max(...sorted.slice(start, start + 4)));
    arr.push(prossTime[i] + Math.max(...sorted.slice(start, start + 4)));
    start += 4;
  }
  return Math.max(...arr);
}

console.log(minTime([10, 20], [2, 3, 1, 2, 5, 8, 4, 3]));

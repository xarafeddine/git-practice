function minCost(arr, limit) {
  for (let i = 1; i <= limit; i++) {
    let min = Infinity;
    let j = 0;
    let sum = 0;
    while (j < arr.length) {
        let k = j;
        let max = -Infinity;
        while(k<limit){
            if(max < arr[k]){
                max = arr[k];
            }
            k++;
            j++;
        }
    }
  }
}

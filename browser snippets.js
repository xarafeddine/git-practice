// two sums:

var twoSum = function (nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if(hashmap[nums[i]]!==undefined) return [hashmap[nums[i]], i];
        const remain = target - nums[i];
        hashmap[remain] = i;
    }
};

======================================

//calculate diff value
      
function findDifferenceValue(firstString, secondString) {
    // Write your code here
    // if(firstString.includes(secondString)) return 0;
    if(secondString == "") return 0;
    
    let j=0;
    let i=0;
    let lastRemoved = i;
    let sum = 0;
    let extra = 0;
    while(i<secondString.length){
        
        if(secondString[i]===firstString[j]) {
            i++;
            j++;
            continue;
        }
        j++;
        if(j=== firstString.length){
            extra = 1;
            sum += i - lastRemoved;
            lastRemoved = i;
            i++;
            j = i;
        }
    }
    
    return sum + extra;

}
      
      //......................................................................................
      
      //maximum subarray
      
      function maxSubarray(arr){

    let globalMax = -Infinity;
    let localMax = 0;
    for(let i=0; i<arr.length;i++){
        localMax = Math.max(arr[i],arr[i]+localMax);
        globalMax = Math.max(globalMax, localMax);
    }
    return globalMax;
    
}

const arr1 = [-2,1,-3,4,-1,2,1,-5,4]
const arr = [2, -3, 4, 6, 1]


maxSubarray(arr1);


      
      //......................................................................................
      
      //gain max value
      
      function gainMaxValue(security_val, k) {
  const n = security_val.length;
  const dp = new Array(n).fill(-Infinity);

  for (let i = n - 1; i >= 0; i--) {
    let max_value_from_i = security_val[i];
    if (i + k < n) {
      max_value_from_i += dp[i + k];
    }
    dp[i] = max_value_from_i;
  }
    
    // let max = -Infinity;
    // for(let i=0; i<dp.length; i++){
    //     if(max<dp[i]) max = dp[i];
    // }
  return dp.reduce((acc,num)=> Math.max(acc,num),-Infinity);
}
      
      //......................................................................................
      
      //MinHeap
      
      
      
      //......................................................................................
      
      //MEX game
      
      function getMaximumMEX(arr) {
    // Write your code here
    arr = arr.sort((a, b)=> a-b);
    arr[0] = 0;
    for(let i=1,j=1; i<arr.length; i++){
        if(arr[i]>=j) {
            arr[i] = j;
            j++;
        }
        
    }
    return arr.at(-1)+1;
}
      
      //......................................................................................
      
      //skip a level
      
      function maximumPoints(k, costs) {
    // Write your code here
    
    let max = 0;
    let skip = false;
    let count = 0;
    for(let i=0; i<costs.length; i++){
        max = Math.max(max, costs[i]);
        k-= costs[i];
        count++;
        if(k<0){
            count--;
            if(skip) break;
            k+=max;
            skip = true;
        }
    }
    return count;
    
}

      
      //......................................................................................
      
      //cut them all
      
      
// function cutThemAll(lengths, minLength) {
//     // Write your code here
//     let cuts = lengths.length - 2;
//     while(cuts>0){
//         let start= lengths[0];
//         let end = lengths.at(-1);
//         if(start<end){
//             lengths.shift();
//         }else{
//             lengths.pop();
//         }
//         cuts--;
//     }
//     const sum = lengths.reduce((acc, val)=>acc+val,0);
//     if(sum<minLength) return "Impossible";
//     return "Possible"
    
// }

function cutThemAll(lengths, minLength) {
    // Write your code here
    let max = 0;
    for(let i=0; i<lengths.length-1; i++){
        max = Math.max(max, lengths[i] + lengths[i+1]);
    }
    if(max<minLength) return "Impossible";
    return "Possible";
    
}
      
      //......................................................................................
      
      //balance Parentheses
      
      function minimumSwaps(brackets) {
    // Write your code here
    let numOfClosingBrackets = 0;
    let numOfOpeningBrackets = 0;
    for(let s of brackets){
        if(s==="(") numOfOpeningBrackets++;
        else numOfClosingBrackets++;
    }
    if(numOfClosingBrackets !== numOfOpeningBrackets) return -1;
    const arr = [];
    let numOfSwap = 0;
    for (let s of brackets){
        if(s === "(") arr.push(s);
        else {
            if(arr.length === 0) {
                numOfSwap++;
                arr.push("(");
            }
            else arr.pop();
        }
    }
    return numOfSwap;
    
}


function isBalanced(str){
    const arr = [];
    for (let s of str){
        if(s === "(") arr.push(s);
        else {
            if(arr.length === 0) return false;
            arr.pop();
        }
    }
    if(arr.length === 0) return true;
    return false;
}
      
      //......................................................................................
      
      //suspicious Activity From Logs
      
      function processLogs(logs, threshold) {
    // Write your code here
    const obj = {};
    for(let log of logs){
        const [senderId, receiverId, _] = log.split(' ');
        obj[senderId] = (obj[senderId] || 0 )+1;
        if(senderId !== receiverId) obj[receiverId] = (obj[receiverId] || 0 )+1;
    }
    const arr = [];
    for(let key in obj){
        if(obj[key]>=threshold) arr.push(key);
    }
    console.log(obj, arr);
    return arr.sort((a,b)=>a-b);
}
      
      //......................................................................................
      
      //Find the Factor
      
      function pthFactor(n, p) {
    // Write your code here
    let arr = [];
    let count = 1;
    for(let i=1; i<=Math.sqrt((n)); i++){
        if(n%i===0){
            if(count===p) return i;
            arr.push(i);
            if(i*i!==n) arr.push(n/i);
            count++;
        }
    }
    arr =  arr.sort((a,b)=> a-b);
    console.log(arr)
    return arr[p-1] || 0;
}
      
      //......................................................................................
      
      //No pairs allowed
      
      function minimalOperations(words) {
    // Write your code here
    return words.map((str)=>{
        let count = 0;
        let sum = 0;
        for(let i=0; i<str.length-1; i++){
            if(str[i] === str[i+1]){
                count++;
            } else{
                sum+=Math.ceil(count/2);
                count = 0;
            }
        }
        sum+=Math.ceil(count/2);
        return sum;
    })
}
      
      //......................................................................................
      
      //authentication tokens
      
      function numberOfTokens(expiryLimit, commands) {
    // Write your code here
    const obj = {};
    let time = 0;
    for(let req of commands){
        time = req[2];
        if(req[0]===0) {
            if(obj[req[1]]===undefined) obj[req[1]] = time+expiryLimit;
        }
        else {
            if(obj[req[1]]){
                if(obj[req[1]]<time) obj[req[1]] = 0;
                else obj[req[1]]= time+expiryLimit; 
            }
            
        }
    }
    console.log(obj)
    return Object.values(obj).reduce((acc, val)=>val>=time?++acc:acc,0);
}
      
      //......................................................................................
      
      //isPossible
      
      function recursive (a, b, c, d){
    if(a>c || b>d) return false;
    if(a===c && b===d) return true;
    return recursive(a, a+b,c,d) || recursive(a+b, b,c,d);
}
function isPossible(a, b, c, d) {
    // Write your code here
    return recursive(a, b, c, d)? "Yes": "No";
    
}
      
      //......................................................................................
      
      //Project estimates
      
      function countPairs(arr, target) {
    // Write your code here
    const obj = {};
    let counter = 0;
    for(let i=0; i<arr.length; i++){

        if(obj[target+arr[i]]) counter++;
        if(obj[Math.abs(target-arr[i])]) counter++;
        // console.log(arr[i], target+arr[i], Math.abs(target-arr[i]));
        // console.log(obj);
        
        obj[arr[i]] = true;
    }
    return counter
}
      
      //......................................................................................
      
      //Simple customer support ticketing
      
      function matchingBraces(braces) {
    // Write your code here
    return braces.map(arr=>{
        if(isBalanced(arr)) return 'YES';
        return 'NO';
    });
}

function isBalanced(arr){
    const stack = [];
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let brace of arr){
        if(brace in obj){
            stack.push(brace);
        }else{
            if(stack.length === 0) return false;
            if(obj[stack.at(-1)] !== brace) return false;
            stack.pop();
            
        }
    }
    if(stack.length !== 0) return false;
    return true;
}

      
      //......................................................................................
      
      //Maximum profit
      
      function findMaximumProfit(category, price) {
  const temp = [];
  for (let i = 0; i < price.length; i++) {
    temp.push([price[i], category[i]]);
  }
  temp.sort((a, b) => a[0] - b[0]);
  
  const vis = {};
  let ans = 0;
  const numCategories = new Set(category).size;
  
  for (const [p, c] of temp) {
    if (!vis[c]) {
      vis[c] = 1;
      ans += Object.keys(vis).length * p;
    } else {
      ans += numCategories * p;
    }
  }
  
  return ans;
}
      
      //......................................................................................
      
      //schedule tasks on min machines
      
      class MinHeap {
  constructor(data = new Array()) {
    this.data = data;
    this.compareVal = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.compareVal(this.data[index][0], this.data[parentIndex][0]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(this.data[leftIndex][0], this.data[findIndex][0]) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(this.data[rightIndex][0], this.data[findIndex][0]) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

function tasks(tasksList) {
  if (tasksList.length === 0) {
    return 0; // No tasks, no machines needed
  }

  // Sort the tasks by start time
  tasksList.sort((a, b) => a[0] - b[0]);

  const minHeap = new MinHeap();

  // Add the first task to the minHeap
  minHeap.offer([tasksList[0][1], 0]);

  for (let i = 1; i < tasksList.length; i++) {
    console.log(minHeap.data)
    const currentTask = tasksList[i];

    // Check if the current task can be assigned to any existing machine
    const earliestEndTime = minHeap.peek()[0];

    if (currentTask[0] >= earliestEndTime) {
      // If the start time of the current task is greater than or equal to
      // the end time of the earliest task on the machine, assign it to the same machine.
      const [endTime, machineIndex] = minHeap.poll();
      minHeap.offer([currentTask[1], machineIndex]); // Update the machine with the new end time.
    } else {
      // If not, assign it to a new machine.
      minHeap.offer([currentTask[1], minHeap.size()]);
    }
  }

  // The size of the minHeap represents the minimum number of machines required.
  return minHeap.size();
}


      
      //......................................................................................
      
      //min Swap
      
      function minSwap(arr){
    let numOfSwapForZeros = 0;
    let numOfSwapForOnes = 0;
    let numOfZeros = 0;
    let numOfOnes = 0;
    for(let num of arr){
        if(num === 1) numOfOnes++;
        else numOfSwapForOnes+=numOfOnes;
        
        if(num === 0) numOfZeros++;
        else numOfSwapForZeros+=numOfZeros;
    }
    return Math.min(numOfSwapForZeros, numOfSwapForOnes);
}

minSwap([1,0,1,0])
      
      //......................................................................................
      
      //fetchGraphQL Api
      
      const res = await fetch('/', {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify({
        query:`
            query {
                reviews {
                id
              }
              games {
                id
              }
              authors {
                id
              }
            }
        `
    })
})

const data  = await res.json();
console.log(data.data)
      
      //......................................................................................
      
      //regex
      
      const regex = new RegExp(/^\d*\.\d+[m|h]$/);
console.log(regex.test('334.4hm')); // true
      
      //......................................................................................
      
      //arraymanipulation
      
      function arrayManipulation(n, queries) {
    // Write your code here
    const arr = new Array(n).fill(0);
    for (let [a, b, k] of queries) {

        arr[a - 1] += k;
        arr[b ] += -k;
    }
    // let sum = 0;
    // let max = 0;
    // for (let num of arr) {
    //     sum += num;
    //     if (max < sum) max = sum;
    // }
    // return max;
    return arr.reduce((res, val) => {
        let sum = res[1] + val;
        let max = res[0];
        if (max < sum) max = sum;
        return [max, sum];
    }, [0, 0])[0];
}
      
      //......................................................................................
      
      //remove element
      
      const removeElement = function(nums, val) {
    let n = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i]==val){
            nums[i]="_";
            n++;
        }else{
            [nums[i], nums[i-n]] = [nums[i-n], nums[i]];
        }
    }
    console.log(nums)
    return nums.length - n;
};

var removeElement = function(nums, val) {
    let j = 0;
    for( let n of nums )if( n !== val ) nums[j++] = n
    return j;
};
      
      //......................................................................................
      
      //remove duplicates from sorted array 1
      
      var removeDuplicates = function(nums) {
   if(nums.length===0){
       return 0;
   }
   let k=1;
   for(let i=1;i<nums.length;i++){
       if(nums[i]!==nums[k-1]){
           nums[k]=nums[i];
           k++
       }
   }
    return k
};
      
      //......................................................................................
      
      //remove duplicates from sorted array 2
      
      var removeDuplicates = function(nums) {
   if(nums.length===2){
       return nums.length
   }
   let count =1;
   let index=1;
   for(let i=1;i<nums.length;i++){
       if(nums[i]===nums[i-1]){
           count++
       }
       else{
           count=1
       }
       if(count<=2){
           nums[index]=nums[i]
           index++
       }
   }
   return index
};

var removeDuplicates = function (nums) {
    let n, count, arr = [];
    nums.forEach((num, index) => {
        if (n == num) {
            count--;
        } else {
            count = 2;
        }
        n = num;
        if (count <= 0) {
            arr.push(index);
        }
    })


    for (let i = 0; i < arr.length; i++) {
        nums.splice(arr[i] - i, 1)
    }

    return nums.length;
};
      
      //......................................................................................
      
      //rotate array
      
      var rotate = function(nums, k) {
   const offset = k % nums.length
nums.splice(0,0,...nums.splice(nums.length - offset))
   return nums
};

var rotate = function (nums, k) {
    const arr = [...nums];
    for(let i=0; i<nums.length; i++){
        nums[(i+k)%nums.length]=arr[i];
    }
};
      
      //......................................................................................
      
      //best time to sell a stock 1
      
      var maxProfit = function (prices) {
    let max = 0;
    let i = 0;
    let j = i + 1;
    while (j < prices.length) {
        if (prices[j] - prices[i] > 0) {
            if (max < prices[j] - prices[i]) max = prices[j] - prices[i];
        } else i = j;
        j++;
    }
    return max;
};
// var maxProfit = function (prices) {
//     let sum = 0;
//     let max = 0;
//     for (let i = 1; i < prices.length; i++) {
//         const diff = prices[i] - prices[i - 1];
//         sum += diff;
//         if (max < sum) max = sum;
//         if(sum<0) sum = 0; 
//     }
//     return max;
// };

      
      //......................................................................................
      
      //best time to buy stock 2
      
      var maxProfit = function (prices) {
    let sum = 0;
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1];
        if (diff > 0) sum += diff
    }
    return sum;
};
      
      //......................................................................................
      
      //Jump game1
      
      var canJump = function(nums) {
  let maxPos = 0;
  const end = nums.length - 1;
  for (let i = 0; i <= end; i++) {
      if (i > maxPos) {
          return false;
      }
      maxPos = Math.max(i + nums[i], maxPos);
      if (maxPos >= end) {
          return true;
      }
  }
  return false;
};

var canJump = function (nums) {
    let t = nums.length - 1
    for (let i = t; i >= 0; i--) if (nums[i] + i >= t) t = i
    return t === 0
};
      
      //......................................................................................
      
      //Jump game 2
      
      var jump = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + i, nums[i - 1]);
    }
    let index = 0;
    let count = 0;
    while (index < nums.length - 1) {
        count++;
        index = nums[index];
    }
    return count;
};

var jump = function(A) {
    let ans = 0, n = A.length;
    let currReach = 0, farReach = 0;

    for (let i = 0; i < n - 1; i++) {
        farReach = Math.max(farReach, i + A[i]);
        if (i === currReach)
            ans++, currReach = farReach;
    }
    return ans;
};
      
      //......................................................................................
      
      //H-index
      
      var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  for (let i = 0 ; i < citations.length ; i++) {  
    const max = citations.length - i;
    if (citations[i] < max) continue;
    return max;
  }

  return 0;
};
      
      //......................................................................................
      
      //product of arrary except self
      
      var productExceptSelf = function (nums) {
    let n = nums.length;
    let arr = [];
    let current = 1;
    for(let num of nums){
        arr.push(current);
        current *= num;  
    }
    current = 1;
    for(let i=n-1; i>=0; i--){
        console.log(arr[i]);
        arr[i] *= current;
        current *= nums[i]; 
    }
    return arr;
};

productExceptSelf([1,2,3,4]);
      
      //......................................................................................
      
      //gas station
      
      var canCompleteCircuit = function (gas, cost) {
    let totalFuel = 0;
    let currentFuel = 0;
    let n = gas.length;
    let start = 0;
    for (let i = 0; i < n; i++) {
        totalFuel += gas[i % n] - cost[i % n];
        currentFuel += gas[i % n] - cost[i % n];
        if (currentFuel < 0) {
            currentFuel = 0;
            start = i + 1;
        }
        
    }
    return totalFuel<0 ? -1 : start;
};
      
      //......................................................................................
      
      //password reset
      
      function findResultantString(s) {

  if (s.length === 1) {
    return s;
  } 
  
  let freq = {};
  for (let c of s) {
      freq[c] = (freq[c] || 0) + 1; 
  }
  
  
  let odd = '';
  
  for (let key in freq) {
    let value = freq[key];
    if (value % 2 === 1) odd += key;
  }
  
  const sortedOdd = odd.split('').sort().join('');
  
  let l = 0;
  let r = sortedOdd.length - 1;

  while (l < r) {
    freq[sortedOdd[l]] = freq[sortedOdd[l]] + 1;
    freq[sortedOdd[r]] = freq[sortedOdd[r]] - 1;
    
    if (freq[sortedOdd[r]] === 0) delete freq[sortedOdd[r]];

    l++;
    r--;
  }

  let oddLetter = '';
  let output = '';

  for (let key in freq) {
    let value = freq[key];
    if (value % 2 === 0) {
      for (let i = value; i > 0; i -= 2) {
        output += key;
      }
    } else {
      oddLetter = key;
    }
  }

  
  const sortedOutput = output.split('').sort().join('');
  const reversed = sortedOutput.split('').reverse().join('');
  return sortedOutput + oddLetter + reversed;
}

const s = 'bbcde';
const r = 'eeeeee';
console.log(findResultantString(r));//bcdcb

      
      //......................................................................................
      
      //test
      
      function fn(){
    if(false){
        
    }else{
        let v = 2;
    }
    
        console.log(v)
    
}
fn();
      
      //......................................................................................
      
      //sequential promises resolutioin
      
      const arr = [Promise.resolve(2), Promise.reject(1), Promise.resolve(3)]

for(let i=0;i<arr.length;i++){
    try{
        const res = await arr[i];
        console.log(res);
    } catch(e) {
        console.log(e);
        break;
    }
    
}

      
      //......................................................................................
      
      //candy
      
      var candy = function (ratings) {
        const n = ratings.length;
    
    // Initialize an array to store the candies assigned to each child
    const candies = new Array(n).fill(1);

    // Traverse from left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Traverse from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Sum up the candies array to get the total minimum candies needed
    return candies.reduce((sum, val) => sum + val, 0);
};
      
      //......................................................................................
      
      //batches
      
      function batches(recipe, ingredients){
    let min = Infinity;
    for(key in recipe){
        if(ingredients[key] === undefined) return 0;
        const count = Math.floor(ingredients[key]/recipe[key]);
        if(min>count) min = count;
    }
    return min;
}

const batches = (recipe, available) =>
  Math.floor(
    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
)

// 0 batches can be made
batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
)

      
      //......................................................................................
      
      //Deep clone
      
      function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let clone = Array.isArray(obj) ? [] : {};

  visited.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], visited);
    }
  }

  return clone;
}


function isDeepEqual(obj1, obj2, testPrototypes = false) {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString()
  }

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime()
  }

  if (
    Object.prototype.toString.call(obj1) !==
      Object.prototype.toString.call(obj2) ||
    typeof obj1 !== "object"
  ) {
    return false
  }

  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
        Object.getPrototypeOf(obj1),
        Object.getPrototypeOf(obj2),
        true
      )
    : true

  const obj1Props = Object.getOwnPropertyNames(obj1)
  const obj2Props = Object.getOwnPropertyNames(obj2)

  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
  )
}
      
      //......................................................................................
      
      //roman to number
      
      var romanToInt = function (str) {
    const obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];
        let next = str[i + 1];
        if (obj[curr] < obj[next]) {
            sum += obj[next] - obj[curr];
            i++;
        } else {
            sum += obj[curr];
        }
    }
    return sum;

};
      
      //......................................................................................
      
      //fibonacci
      
      let fibonacciSequence = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
console.log(fibonacciSequence(3));
      
      //......................................................................................
      
      //dowanload all snippets
      
      (Host.InspectorFrontendHost || InspectorFrontendHost).getPreferences(async r => {
    let str = "";
  for (const {name, content} of JSON.parse(r.scriptSnippets || '[]')) {
      str+=`//${name}
      
      ${content}
      
      //......................................................................................
      
      `
      
    
  }
    console.log(str)
});
      
      //......................................................................................
      
      //num to roman
      
      function intToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";
    let i = 0;

    while (num > 0) {
        if (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        } else {
            i++;
        }
    }

    return result;
}
      
      //......................................................................................
      
      //mask
      
      function mask(str){
    let len = str.length;
    if(len<=4) return str;
    return '#'.repeat(len-4)+str.slice(len-4);
}
const mask = (str, maskChar = "#") =>
  str.slice(-4).padStart(str.length, maskChar)
console.log(mask('ajjjjjjjjjjjjjjjjjjjjjsdf'))
      
      //......................................................................................
      
      //longest common prefix
      
      var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length-1);
            if(prefix == '') return "";
        }
    }
    return prefix;
};

// var longestCommonPrefix = function (strs) {
//     let prefix = '';
//     strs.sort();
//     console.log(strs)
//     for (let i = 0; i < Math.min(strs[0].length,strs.at(-1).length); i++) {
//         if (strs[0][i] != strs.at(-1)[i]) return prefix;
//         prefix += strs[0][i];
//     }
//     return prefix;
// };
      
      //......................................................................................
      
//tricky closure
      
function closure_setTimeout(){
    let i = 0;
    while (i < 3) {
      setTimeout(() => console.log(i), 1000 * i);
        i++;
    }

}

function IIFE_closure_setTimeout(){
    let i = 0;
    while (i < 3) {
        const stored_i = i;
        setTimeout(
          (
              (i_val) => () => console.log(i_val)
          )(stored_i)
        , 1000 * i);
        i++;
    }

}

closure_setTimeout(); // 3 3 3
IIFE_closure_setTimeout(); // 0 1 2
      
      //......................................................................................
      
      //needle in haystack
      
      // sliding window
var strStr = function(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
};

// indexOf
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle, 0);
};

// my code
var strStr = function (haystack, needle) {
    let len = needle.length;
    let i = 0, j = 0;
    let idx = -1;

    while (i < haystack.length && j < len) {
        if (haystack[i] == needle[j]) {
            if (j == 0) idx = i;
            j++;
            if (j == len) return idx;
        } else {
            i = idx!=-1?idx:i;
            j = 0;
            idx = -1;
        }
        i++;
        console.log(i, j, idx)
    }
    return -1;
    // return haystack.indexOf(needle);
};
      
      //......................................................................................
      
      //Async queue
      
      const { EventEmitter } = require('events');

class AsyncQueue extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
    this.interval = 250; // Default interval in milliseconds
    this.timer = null;
    this.paused = false;
    this.on("interval", (val) => {
      this.interval = val;
      if(this.paused) return;
      this.pause();
      this.start();
    });
  }

  enqueue(item) {
    if (this.isValidItem(item)) {
      this.queue.push(item);
      this.emit('enqueued', item);
    }
  }

  dequeue() {
    if (this.queue.length > 0) {
      const dequeuedItem = this.queue.shift();
      this.emit('dequeued', dequeuedItem);
    }
  }

  peek() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  print() {
    return [...this.queue];
  }

  getCurrentInterval() {
    return this.interval;
  }

  start() {
    this.paused = false;
    this.timer = setInterval(() => {
      if (!this.paused) {
        this.dequeue();
      }
    }, this.interval);
  }

  pause() {
    this.paused = true;
    clearInterval(this.timer);
  }

  isValidItem(item) {
    return (
      typeof item === 'number' ||
      typeof item === 'string' ||
      (typeof item === 'object' && item !== null)
    );
  }
}

module.exports = AsyncQueue;

      
      //......................................................................................
      
      //scraper
      
      const { EventEmitter } = require('events');
const axios = require('axios');
const cheerio = require('cheerio');

class TinyScraper extends EventEmitter {
    constructor(url, timeout = 2000) {
        super();
        this.url = url;
        this.timeout = timeout;
        this.scrapeStarted = false;

        this.fetchAndParse();
    }

    fetchAndParse() {
        this.emit('scrapeStarted');

        axios.get(this.url)
            .then(response => {
                if (response.status === 200) {
                    const ogData = this.parseHTML(response.data);
                    this.emit('scrapeSuccess', ogData);
                } else {
                    this.emit('error', 'Failed to fetch the webpage');
                }
            })
            .catch(error => {
                if (error.code === 'ETIMEDOUT') {
                    this.emit('timeout');
                } else {
                    this.emit('error', 'Error fetching the webpage');
                }
            });
    }

    parseHTML(html) {
        const $ = cheerio.load(html);
        const ogData = {
            title: $('meta[property="og:title"]').attr('content') || '',
            description: $('meta[property="og:description"]').attr('content') || '',
            image: $('meta[property="og:image"]').attr('content') || '',
        };

        return ogData;
    }
}

module.exports = TinyScraper;

      
      //......................................................................................
      
      //cross the threshold
      
      function getMaxBarrier(initialEnergy, th) {
    let maxBarrier = 0;
    let sum = initialEnergy.reduce((acc, energy) => acc + Math.max(energy - maxBarrier, 0), 0);

    while (sum >= th) {
        maxBarrier++;
        sum = initialEnergy.reduce((acc, energy) => acc + Math.max(energy - maxBarrier, 0), 0);
    }

    return maxBarrier - 1;
}

// Example usage:
const n = 5;
const initialEnergy = [4, 8, 7, 1, 2];
const th = 9;

const result = getMaxBarrier(initialEnergy, th);
console.log(result); // Output: 3
      
      //......................................................................................
      
      //fetch html
      
      fetch('/about').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');

	// Get the image file
	var img = doc.querySelector('img');
	console.log(img);

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
      
      //......................................................................................
      
      //var-let-const
      
      let i =0 ;
const j = 1;
var k = 2;
function fn(){
    console.log(i, j ,k);
}

fn();
      
      //......................................................................................
      
      //sort tree numbers
      
      function bubbleSortThreeNumbers(a, b, c) {
    let temp;

    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }

    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    // Now, a <= b <= c
    return [a, b, c];
}

// Example usage:
const sortedNumbers = bubbleSortThreeNumbers(3, 1, 2);
console.log(sortedNumbers);  // Output: [1, 2, 3]

      
      //......................................................................................
      
      //pipe
      
      function pipe(...funs){
    return (val)=>funs.reduce((acc,func)=>{
        return func(acc);
    },val)
}
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) 
      
      //......................................................................................
      
      //promisify
      
      function promisify(originalFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            // Execute the original function with the provided arguments
            originalFunction(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

// Example usage:
const fs = require('fs');

const readFilePromise = promisify(fs.readFile);

readFilePromise('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(error => console.error(error));

      
      //......................................................................................
      
      //promes.all
      
      /**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

      
      //......................................................................................
      
      //debounce
      
      
export default function debounce(func, wait = 0) {
  let timeoutID = null;
  return function (...args) {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = null; // Not strictly necessary but good to include.
      // Has the same `this` as the outer function's
      // as it's within an arrow function.
      func.apply(this, args);
    }, wait);
  };
}

      
      //......................................................................................
      
      





// ostorlab questions;
/**
 * Given an array of integers, return the indices of the two numbers such that they add up to a specific target.
Example: input: [2, 7, 11, 15], target = 9 output: [0, 1]

*/

// function answer(arr, target) {
//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[target - arr[i]] !== undefined) {
//       return [obj[target - arr[i]], i];
//     }
//     else obj[arr[i]] = i;
//   }
// }

// console.log(answer([-2, -7, 11, 15], -9))


/**
 * 
 * Given an array of strings, find the longest common prefix of all strings.
 * Example: input: ["flower","flow","flight"] output: "fl".
 */



// function result(arr) {
//   let str = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let j = 0;
//     while (j < str.length) {
//       if (str[j] === arr[i][j]) j++;
//       else {
//         str = str.slice(0, j);
//         break;
//       }
//     }
//   }
//   return str;
// }

// const res = result(["kflower", "lflow", "flowht"])
// console.log(res)

/**
Given a string containing only three types of characters: '(', ')', and '*', write a function to check if the string is valid. A string is valid if open parenthesis '(' is always followed by a close parenthesis ')' or a '*' and closed .

Example: input: "(*)" output: True
()()() output: True
()()(  output: false
(*)() output: True
(()) output: false
 */

function isValid(str){
  let isClosed = true;
  for(let i=0; i<str.length; i++){
    if(isClosed) {
      if(str[i]===')' || str[i]==='*') return false;
      if(str[i]==='(' || str[i]==='*') isClosed = false;
    }else{
      if(str[i]==='(') return false;
      if(str[i]===')') isClosed = true;
    }

  }
    return true;
}
isValid('(*)');

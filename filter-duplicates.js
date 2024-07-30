function filterDuplicates(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let newArr = [arr[0]];
  for (let j = 1; j < arr.length; j++) {
    let exist = false;
    for (ele of newArr) {
      if (ele === arr[j]) {
        exist = true;
      }
    }
    if (!exist) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
}

function removeDupticates(arr) {
  return arr.filter((ele, index) => index === arr.indexOf(ele));
}

function deleteDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(deleteDuplicates([4, 3, 4, 1, 3, 5, 6, 7, 7, 4, 6, 9, 0]));
console.log(removeDupticates([4, 3, 4, 1, 3, 5, 6, 7, 7, 4, 6, 9, 0]));
console.log(filterDuplicates([4, 3, 4, 1, 3, 5, 6, 7, 7, 4, 6, 9, 0]));

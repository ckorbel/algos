const sortedArr = [1, 5, 6, 8, 9, 22, 44, 56, 77, 88];

// 0(n)
// 0(log n)

function binarySearch(arr, targetValue) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let current = arr[middle];

    if (arr[middle] < targetValue) {
      min = middle + 1;
    } else if (arr[middle] > targetValue) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return "value not in array";
}

console.log(binarySearch(sortedArr, 5));

const sortedArr = [1, 5, 6, 8, 9, 22, 44, 56, 77, 88];

// 0(n)
// 0(log n)
// note greater than less than works on aphabetically sorted strings as well.
// i.e. "Apple" < "Zebra" would return true.
function binarySearch(arr, targetValue) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] < targetValue) {
      start = middle + 1;
    } else if (arr[middle] > targetValue) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return "value not in array";
}

//binarySearch for

console.log(binarySearch(sortedArr, 5));

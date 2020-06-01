//O(nlogn)  divide-and-conquer
// https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly

import { unsortedArr } from "../../../utils/unsorted";

// helper func merges two sorted arrays
// must work with array with only 1 index and if: [1, 2]  [3, 4]
const merge = (arr1, arr2) => {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      //.shift() removes first index in arr and returns it
      sorted.push(arr1.shift());
    } else {
      //.shift() removes first index in arr and returns it
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1.concat(arr2));
};

// recursive function which cuts the array in half until each
// index is in own array of just 1 item
// base case is set at arr.length <= 1 (i.e when each item has its own array)
const mergeSort = (arr) => {
  console.log(arr.length);
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort(unsortedArr));

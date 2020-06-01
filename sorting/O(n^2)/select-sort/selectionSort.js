// Selection sort
// O(N^2)
// similar to bubbleSort except just looks for the min value
// and places that at the front rather than other way around

// it essentially runs a find min function over the entire array and then swaps that min with the first value then repeats that process

import { unsortedArr } from "../../../utils/unsorted";

const selectionSort = (arr) => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);

  arr.forEach((item, i) => {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(arr, i, min);
  });

  return arr;
};

console.log(selectionSort(unsortedArr));

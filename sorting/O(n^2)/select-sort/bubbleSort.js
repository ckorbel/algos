import { unsortedArr } from "../../../utils/unsorted";

// see: https://www.digitalocean.com/community/tutorials/js-bubble-selection-insertion-sort
// 0(n^2) inefficient
// nested for loops gets largest value to end

// Bubble Sort
const bubbleSort = (arr) => {
  // helper swap function
  const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

bubbleSort(unsortedArr);

// starts at the beginning and begins to divide the array in half the sorted portion on the left
//and the unsorted portion on the right. It will compare the next value in the unsorted portion of the array and
// keep pushing it to the left until it hits a value that is less than its own or until it hits the beginning of the array see condition: j >= 0 && arr[j] > num.

// 0(n^2)

// Insert Sort is a great example of the limitations of big 0 notation.
// As both bubble and selection sort are also 0(n^2); however, big 0 is always based on the worst case scenarion in a worst case insertion sort can be 0(n^2)
//but it will almost certainly be better. You would need a perfect reversed array example: [9, 8, 7, 6, 5, 4] to get 0(n^2).
// Nonethess even though insertion sort will most likely be more effecient than bubble or selection sort it is still quadratic
// and consider more ineffecient solution.

import { unsortedArr } from "../../../utils/unsorted";

const insertionSort = (arr) => {
  arr.forEach((item, i) => {
    let num = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > num; j--) {
      console.log(arr[j]);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = num;
  });

  return arr;
};

console.log(insertionSort(unsortedArr));

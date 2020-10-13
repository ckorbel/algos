/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function merge(arr1, arr2) {
  const sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1.concat(arr2));
}

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = merge(nums1, nums2);

  if (merged.length === 1) {
    return merged[0];
  }

  const middle = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    const amount = merged[middle - 1] + merged[middle];
    return amount / 2;
  } else {
    return merged[middle];
  }
};

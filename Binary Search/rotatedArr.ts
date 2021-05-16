// nums = [1, 3], target = 0
//     l       l   r
// // [4,5,6,7,0,1,2]
// 0

// you can do a modified binary search to find the pivot
// and then use that pivot to do a binary search so you can get 0(log n) time

function search(nums: number[], target: number): number {
  if (!nums) return -1;

  let left: number = 0;
  let right: number = nums.length - 1;

  // find pivot through modified binary search
  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let pivot = left;
  left = 0;
  right = nums.length - 1;
  if (target > nums[right]) {
    right = pivot - 1;
  } else {
    left = pivot;
  }

  // do regular binary search based off of pivot
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

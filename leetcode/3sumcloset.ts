// nums.  [-4, -1, 1, 2] target 1
// nums = [-1,2,1,-4], target = 1
// for loop and nested two pointer while loop 0(n^2)
// math.abs convert negative to positive closer to 0 the closer

function threeSumClosest(nums: number[], target: number): number {
  if (nums.length < 3) return 0;
  const sortedNums: number[] = nums.sort((a, b) => a - b);
  let closest: number = Infinity;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSum - target) < Math.abs(closest - target)) {
        closest = currentSum;
        if (currentSum === target) return currentSum;
      }
      if (currentSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closest;
}

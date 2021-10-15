function maxSubArray(nums: number[]): number {
  let currentSum: number = -Number.MAX_VALUE;
  let maxSum: number = nums[0];
  for (let num of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += num;
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

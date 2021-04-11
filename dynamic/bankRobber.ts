// nums = [1, 2, 3, 1]
// dp =   [1, 2, 4, 0]

// nums = [5, 1, 1, 4, 1]
// dp.  = [5, 5, 6, 9, 9]

function rob(nums: number[]): number {
  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[nums.length - 1];
}

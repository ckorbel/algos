function twoSum(nums: number[], target: number): number[] {
  const numMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (difference in numMap) {
      return [i, numMap[difference]];
    }
    numMap[nums[i]] = i;
  }
  return [0, 0];
}

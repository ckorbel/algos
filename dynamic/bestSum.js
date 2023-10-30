const bestSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestPath = null;

  for (let num of nums) {
    const diff = target - num;
    const remainder = bestSum(diff, nums, memo);
    if (remainder !== null) {
      const combination = [...remainder, num];
      if (shortestPath === null || combination.length < shortestPath.length) {
        shortestPath = combination;
      }
    }
  }
  memo[target] = shortestPath;
  return shortestPath;
};

console.log(bestSum(100, [1, 2, 5, 25]));

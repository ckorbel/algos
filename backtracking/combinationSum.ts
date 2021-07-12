// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

function combinationSum(candidates: number[], target: number): number[][] {
  const result = [];

  function backTrack(arr = [], sum = 0, idx = 0) {
    if (sum > target) return;
    if (sum === target) result.push(arr);

    for (let i = idx; i < candidates.length; i++) {
      backTrack([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
  backTrack();
  return result;
}

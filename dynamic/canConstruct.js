const canConstruct = (target, strings, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") return true;

  for (let string of strings) {
    if (target.indexOf(string) === 0) {
      const suffix = target.slice(string.length);
      if (canConstruct(suffix, strings, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

// tabulation version [true, false, false .... length of target word + 1]
// 0(m^2 * n) m being the wordBank length n being length of target word
const canConstruct = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= target.length; i++) {
    // check for early exit
    if (dp[target.length]) return true;
    if (dp[i]) {
      for (let word of wordBank) {
        if (word === target.slice(i, i + word.length)) {
          dp[i + word.length] = true;
        }
      }
    }
  }
  return dp[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eeee", "eeeeee"])
);

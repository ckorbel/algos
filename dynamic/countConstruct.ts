const countConstruct = (target: string, wordBank: string[]): number => {
  const dp = new Array(target.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    if (dp[i] > 0) {
      for (let word of wordBank) {
        if (word === target.slice(i, i + word.length)) {
          dp[i + word.length] += dp[i];
        }
      }
    }
  }

  return dp[target.length];
};

//  number to right represents num of ways to contruct substring
// so   "purp" has 2 ways to be contructed.
//  [1, 1, 0, 1, 2, 1, 2]
//   p  u  r  p  l  e  empty

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

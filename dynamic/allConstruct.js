const allConstruct = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill().map(() => []);
  dp[0] = [[]];
  for (let i = 0; i <= target.length; i++) {
    if (dp[i].length > 0) {
      for (let word of wordBank) {
        if (word === target.slice(i, i + word.length)) {
          const newCombos = dp[i].map((subArray) => [...subArray, word]);
          dp[i + word.length].push(...newCombos);
        }
      }
    }
  }
  return dp[target.length];
};

//  [[], [["ab"]], [["abc"],
//                  ["ab", "c"],   [...etc]
//                 ]
//   a      b          c            d  e  f  empty

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);

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

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eeee", "eeeeee"])
);

const allConstruct = (
  target: string,
  strings: string[],
  memo: Record<string, string[][]> = {}
): string[][] => {
  if (target in memo) return memo[target];
  if (target === "") return [[]]; // subarray
  const result = [];
  for (let string of strings) {
    if (target.indexOf(string) === 0) {
      const suffix = target.slice(string.length);
      const suffixWays = allConstruct(suffix, strings);
      const targetWays = suffixWays.map((way) => [string, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);

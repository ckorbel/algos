function letterCombinations(digits: string): string[] {
  const results: string[] = [];
  if (digits === null || digits.length === 0) return results;
  const digitMap: Record<number, string> = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function dfs(results, digits, current, index, digitMap): void {
    if (index === digits.length) {
      results.push(current);
      return;
    }

    const letters = digitMap[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      dfs(results, digits, current + letters[i], index + 1, digitMap);
    }
  }

  // "23"
  dfs(results, digits, "", 0, digitMap);
  return results;
}

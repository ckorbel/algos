function numDecodings(s: string): number {
  if (s.length < 1) return 0;
  if (s[0] === "0") return 0;
  if (s.length === 1) return 1;
  const dp: number[] = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const oneDigit: number = Number(s.slice(i - 1, i));
    if (oneDigit > 0) {
      dp[i] += dp[i - 1];
    }

    const twoDigit: number = Number(s.slice(i - 2, i));
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

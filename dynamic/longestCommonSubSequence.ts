// Input: text1 = "abcde", text2 = "ace"
// Output: 3

// dp = [0,0,]

//    "A" "C" "E"
// "A"[1,  0,  0]
// "B"[0,  0,  0]
// "C"[0,  1,  0]
// "D"[0,  0,  0]
// "E"[0,  0,  1]

// TURN TO:
//    "A" "C" "E"
// "A"[1,  1,  1]
// "B"[1,  1,  1]
// "C"[1,  2,  2]
// "D"[1,  2,  2]
// "E"[1,  2,  3]

function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = [];
  let m = text1.length;
  let n = text2.length;

  // create 2d array
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // if chars dont match check left and top for longer subsequ
      if (text1.charAt(i - 1) !== text2.charAt(j - 1)) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }

      // if chars
    }
  }

  return dp[m][n];
}

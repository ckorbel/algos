// very similar to grid traveler tabulation

var minPathSum = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  const dp = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += grid[i][j];
      if (i > 0 && j > 0) {
        // check whether above or left is smaller some
        dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
        // top row cant add dp[i][j - 1] if j is 0
      } else if (i > 0) {
        dp[i][j] += dp[i - 1][j];
        // left column cant add dp[i - 1][j] if i is 0
      } else if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};

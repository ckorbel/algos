// [1, 3, 1]
// [1, 5, 1]
// [4, 2, 1]

// [1, 4, 5]
// [2, 7, 6]
// [6, 2, 1]

// 0(n * m)
// 0(1)

function minPath(grid: number[][]): number {
  if (grid.length < 1 || grid === null) return 0;

  // add top row
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  // add left column
  for (let j = 1; j < grid.length; j++) {
    grid[j][0] += grid[j - 1][0];
  }

  // calculate min path
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      let minSteps = Math.min(grid[i - 1][j], grid[i][j - 1]);
      grid[i][j] += minSteps;
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
}

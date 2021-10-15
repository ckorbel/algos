const houses: number[][] = [
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 19],
];

// => turn in to =>

//   [17, 2, 17], // top line functions as seed values
//   [18, 33, 7],  33 is 16 + 17, 18 is 16 + 2, 9 is 5 + 2
//   [21, 10, 37],  21 is 14 + 7, 10 is 3 + 7, 37 is 19 + 18
//   min value in last row is 10 return 10

function paintHouses(grid: number[][]): number {
  if (!grid || grid.length == 0) return 0;

  for (let i = 1; i < grid.length; i++) {
    const rowAbove: number = i - 1;
    // this only works if the grid we're sure the grid is 3x3
    grid[i][0] += Math.min(grid[rowAbove][1], grid[rowAbove][2]);
    grid[i][1] += Math.min(grid[rowAbove][0], grid[rowAbove][2]);
    grid[i][2] += Math.min(grid[rowAbove][0], grid[rowAbove][1]);
  }

  // overcomplicated to find the min value in an array of numbers;
  const minValueInLastRow: number = Math.min.apply(Math, grid[grid.length - 1]);
  return minValueInLastRow;
}

paintHouses(houses);

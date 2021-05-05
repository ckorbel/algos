// counter 3
// [2, 0, 1]
// [2, 2, 0]
// [0, 2, 2]

function orangesRotting(grid: number[][]): number {
  let fresh: number = 0;
  const queue = [];

  // queue every rotten grid point
  // count every fresh orange
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }
  let minute = 0;
  // use queue for bfs
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      // coordinates for rotten orange
      const [x, y] = queue.shift();

      //check row above w/ boundry check
      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2;
        fresh--;
        queue.push([x - 1, y]);
      }

      // below
      if (x + 1 < grid.length && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2;
        fresh--;
        queue.push([x + 1, y]);
      }

      //right
      if (y + 1 < grid[x].length && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2;
        fresh--;
        queue.push([x, y + 1]);
      }
      //left
      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2;
        fresh--;
        queue.push([x, y - 1]);
      }
    }

    if (queue.length > 0) minute++;
  }

  return fresh === 0 ? minute : -1;
}

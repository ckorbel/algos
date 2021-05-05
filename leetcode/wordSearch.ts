function findWord(
  board: string[][],
  word: string,
  i: number,
  j: number,
  count: number
): boolean {
  if (count === word.length) return true;

  //boundry check
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[i].length ||
    board[i][j] !== word[count]
  ) {
    return false;
  }

  // need to alter cell to not be re-used but also need to change it back
  let temp = board[i][j];
  board[i][j] = "";

  let found =
    findWord(board, word, i + 1, j, count + 1) ||
    findWord(board, word, i, j + 1, count + 1) ||
    findWord(board, word, i - 1, j, count + 1) ||
    findWord(board, word, i, j - 1, count + 1);

  // restore value back
  board[i][j] = temp;

  return found;
}

function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && findWord(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

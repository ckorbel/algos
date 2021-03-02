var spiralOrder = function (matrix) {
  const spiralOutput = [];
  if (matrix.length < 1) return spiralOutput;

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let columnStart = 0;
  let columnEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      spiralOutput.push(matrix[rowStart][i]);
    }

    rowStart++;

    for (let j = rowStart; j <= rowEnd; j++) {
      spiralOutput.push(matrix[j][columnEnd]);
    }

    columnEnd--;

    // need to check boundry because values have changed
    if (rowStart <= rowEnd) {
      for (let i = columnEnd; i >= columnStart; i--) {
        spiralOutput.push(matrix[rowEnd][i]);
      }
    }

    rowEnd--;
    // need to check boundry because values have changed
    if (columnStart <= columnEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        spiralOutput.push(matrix[i][columnStart]);
      }
    }

    columnStart++;
  }

  return spiralOutput;
};

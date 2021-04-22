// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

function backTrack(
  outputArr: string[],
  currentString: string,
  open: number = 0,
  closed: number = 0,
  max: number
): void {
  // base case
  if (currentString.length === max * 2) {
    outputArr.push(currentString);
    return;
  }

  if (open < max)
    backTrack(outputArr, currentString + "(", open + 1, closed, max);
  if (closed < open)
    backTrack(outputArr, currentString + ")", open, closed + 1, max);
}

function generateParenthesis(n: number): string[] {
  const output: string[] = [];
  backTrack(output, "", 0, 0, n);
  console.log(output);
  return output;
}

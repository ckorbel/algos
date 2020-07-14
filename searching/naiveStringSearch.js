//return number of times substring appears in a string
// nested for loops 0n^2 quandratic
// there's a better way

function naiveSearch(string, substring) {
  count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (substring[j] !== string[i + j]) {
        break;
      }

      if (j === substring.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveSearch("lorie lol", "lo"));

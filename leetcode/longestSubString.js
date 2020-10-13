const test = "pwwkew";

function longestSubString(str) {
  if (!str.length) {
    return "";
  }
  let front = 0;
  let back = 0;
  const tracker = {};
  let longString = str[0];
  let maxLength = 1;
  while (front < str.length) {
    if (!tracker.hasOwnProperty(str[front])) {
      tracker[str[front]] = 1;
      front++;
      if (maxLength < front - back) {
        str.substring(back, front);
        longString = str.substring(back, front);
        maxLength++;
      }
    } else {
      delete tracker[str[back]];
      back++;
    }
  }
  return longString;
}

console.log(longestSubString(test));

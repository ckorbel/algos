// 'babad'
// 'abad'
// 'bad'

//racecar

// if you brute re-create every substring possible and check if palidrrome you're looking at 0(n^3)
// if you check for panlidrome by starting the in middle and expanding left and right pointer out until they dont match
// you can get 0(n^2) time and O(1) space
// regular 0(n) for loop running expand from middle on each index with boundary checks
// return longest distance left v right get from each other

// NOTE: odd numbered substring such as racecar left and right start at same index
// even numbered such baab left and right start next to each hence 2 attempts

function expandFromMiddle(str: string, left: number, right: number): number {
  if (str === null || left > right) return 0;

  while (
    left >= 0 &&
    right < str.length &&
    str.charAt(left) === str.charAt(right)
  ) {
    left--;
    right++;
  }

  return right - left - 1;
}

function longestPalindrome(s: string): string {
  if (s == null || s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const lengthOne = expandFromMiddle(s, i, i);
    const lengthTwo = expandFromMiddle(s, i, i + 1);
    const length = Math.max(lengthOne, lengthTwo);
    if (length > end - start) {
      start = i - Math.floor((length - 1) / 2);
      end = i + Math.floor(length / 2);
    }
  }
  console.log({ start, end });
  return s.slice(start, end + 1);
}

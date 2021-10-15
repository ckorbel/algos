// a happy number is a positive integar
// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// NOTE: if number is NOT "happy" you will get a stack overflow

function sumDigits(num) {
  let sum = 0;
  const numAsString = num.toString().split("");
  for (let i = 0; i < numAsString.length; i++) {
    const backToNumber = parseInt(numAsString[i], 10);
    sum += backToNumber * backToNumber;
  }
  return sum;
}

function isHappy(n: number): boolean {
  const seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumDigits(n);
  }

  return n === 1;
}

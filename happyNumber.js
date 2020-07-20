// a happy number is a positive integar
// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// NOTE: if number is NOT "happy" you will get a stack overflow

const n = 19;

const isHappyNumber = (n) => {
  const numAsString = n.toString();
  let sum = 0;
  for (let i = 0; i < numAsString.length; i++) {
    const backToNumber = parseInt(numAsString[i]);
    sum = backToNumber * backToNumber;
  }
  if (sum === 1) {
    return true;
  } else {
    return isHappyNumber(sum);
  }
};

console.log("result:", isHappyNumber(n));

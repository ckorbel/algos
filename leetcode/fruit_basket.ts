// Input: fruits = [0,1,2,2]
// Output: 3

// basically a sliding window problem with a terrible description

function totalFruit(fruits: number[]): number {
  if (!fruits || fruits.length === 0) return 0;
  const isSeens = {};
  let isSeenCount = 0;
  let maxCount = 0;
  let left = 0,
    right = 0;
  while (right < fruits.length) {
    const char = fruits[right];
    if (isSeens[char] !== undefined) {
      isSeens[char]++;
    } else {
      isSeens[char] = 1;
      isSeenCount++;
      while (isSeenCount > 2) {
        const lChar = fruits[left];
        isSeens[lChar]--;
        left++;
        if (isSeens[lChar] === 0) {
          delete isSeens[lChar];
          isSeenCount--;
        }
      }
    }
    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }
  return maxCount;
}

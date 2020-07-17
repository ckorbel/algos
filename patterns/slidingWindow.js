// sliding window
// useful for subset of arrays or strings

//unordered array max sum of 2 consecutive integers
//target is the number of consecutive integers

// keeping the

const input = [1, 2, 5, 2, 8, 1, 5];

function maxSubArrSum(arr, num) {
  if (arr.length < 1) return null;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    // keep window sub old value add new value avoid nested loops keeps linear 0(n)
    tempSum = tempSum - arr[j - num] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubArrSum(input, 3));

// sliding window gives 0(n) instead of 0(n^2)
function longestSubString(str) {
  let left = 0;
  let right = 0;
  let max = 0;
  const duplicates = {};
  // if you need the actual string returned as well
  while (right < str.length) {
    if (str[right] in duplicates) {
      delete duplicates[str[left]];
      left++;
    } else {
      duplicates[str[right]] = 1;
      let difference = right + 1 - left;
      if (difference > max) {
        max = difference;
      }
      right++;
    }
  }
  return max;
}

console.log(longestSubString("babcaccqwertyuioabccbdcccccccccc"));

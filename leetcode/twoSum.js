var twoSum = function (nums, target) {
  const tracker = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in tracker) {
    } else {
      tracker[nums[i]] = i;
    }
  }
  let difference;
  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    if (difference in tracker) {
      if (i !== tracker[difference]) {
        return [i, tracker[difference]];
      }
    }
  }
};

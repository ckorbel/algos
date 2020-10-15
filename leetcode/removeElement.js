function removeElement(nums, val) {
  let counter = 0;
  while (counter < nums.length) {
    if (nums[counter] === val) {
      nums.splice(counter, 1);
    } else {
      counter++;
    }
  }
  return nums.length;
}

console.log(removeElement([3, 2, 2, 3], 3));

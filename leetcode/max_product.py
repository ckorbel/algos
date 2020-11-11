def max_product(nums):
  if len(nums) == 0:
    return None
  max = 0
  next_max = 0
  for x in nums:
    if x > max:
      next_max = max
      max = x
    elif x > next_max:
      next_max = x
  return (max - 1) * (next_max - 1)

print(max_product([3, 4, 5, 2]))
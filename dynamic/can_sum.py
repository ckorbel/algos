def can_sum(target, nums, memo = {}):
  if target in memo: 
    return memo[target]
  if target == 0: 
    return True
  if target < 0:
    return False
  
  for num in nums:
    diff = target - num
    if can_sum(diff, nums, memo):
      memo[target] = True
      return True
  memo[target] = False
  return False

print(can_sum(300, [7, 14]))
## recursion

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

##table
# 0(n * m) n being target sum nums being length of nums array
def can_sum(target, nums):
  table = [False] * (target + 1)
  table[0] = True
  for i in range(len(table)):
    if table[i]:
      for num in nums:
        if (i + num) <= len(table) - 1:
          table[i + num] = True
  return table[target]



print(can_sum(300, [7, 14]))
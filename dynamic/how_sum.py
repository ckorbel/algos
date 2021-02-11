def how_sum(target, nums): 
  table = [None] * (target + 1)
  table[0] = []
  for i in range(target):
    # check for early exist if there are multiple ways to sum
    if table[target] != None: 
      return table[target]
    if table[i] != None:
      for num in nums: 
        if (i + num) <= len(table) - 1:
          # splat * operate similar to ...spread in JS
          table[i + num] = [*table[i], num]
  return table[target]

print(how_sum(7, [5, 3, 4]))
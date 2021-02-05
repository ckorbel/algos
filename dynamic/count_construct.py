## return the number of ways the word bank can create the target string
## without memoization: 0(n^m)
## with memo: 0(n * m^2)
def count_construct(target, word_bank, memo = {}):
  if target in memo: 
    return memo[target]
  if target == "":
    return 1
  total_count = 0
  for word in word_bank: 
    # startwith built method return True if valid prefix
    if target.startswith(word):
      num_ways = count_construct(target[len(word):], word_bank)
      total_count += num_ways
  memo[target] = total_count
  return total_count

  




print(count_construct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
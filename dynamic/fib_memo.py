def fib(num, memo={}):
    if num <= 2:
        return 1
    if num in memo:
        return memo[num]
    answer = fib(num - 1, memo) + fib(num - 2, memo)
    memo[num] = answer
    return answer


print(fib(71))

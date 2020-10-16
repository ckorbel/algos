def fib(n):
    if n <= 2:
        return 1
    return fib(n-1) + fib(n - 2)


print(fib(8))


memo = {}


def fib_memo(n):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    res = fib(n - 1) + fib(n - 2)
    memo[n] = res
    return res


print(fib_memo(45))

def running_sum(arr):
    sum = 0
    for x in range(len(arr)):
        sum += arr[x]
        arr[x] = sum
    return arr


print(running_sum([3, 1, 2, 10, 1]))

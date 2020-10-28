def sum_zero(arr):
    front = 0
    last = len(arr) - 1
    while front <= last:
        sum = arr[front] + arr[last]
        if sum == 0:
            return [front, last]
        elif sum < 0:
            last -= 1
        elif sum > 0:
            front += 1
    return None


print(sum_zero([-5, -3, -2, -1, 0, 1, 2, 5]))

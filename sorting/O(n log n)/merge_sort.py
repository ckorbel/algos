def merge(arr1, arr2):
    sorted = []
    while len(arr1) > 0 and len(arr2) > 0:
        if arr1[0] < arr2[0]:
            sorted.append(arr1.pop(0))
        else:
            sorted.append(arr2.pop(0))

    while len(arr1) > 0:
        sorted.append(arr1.pop(0))

    while len(arr2) > 0:
        sorted.append(arr2.pop(0))
    return sorted


print(merge([1, 3, 5], [2, 4]))


def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr)//2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


print(merge_sort([100, 6, 3, 22, 12, -22]))

import math


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

# print(merge([1, 4, 7], [3, 8, 11]))


def find_median(nums1, nums2):
    merged = merge(nums1, nums2)

    if len(merged) == 1:
        return merged[0]

    middle = math.floor(len(merged) / 2)
    if middle % 2 == 0:
        amount = merged[middle - 1] + merged[middle]
        return amount / 2
    else:
        return merged[middle]


print(find_median([], [0, 0]))
